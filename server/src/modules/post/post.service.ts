import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async findPosts() {
    return await this.prismaService.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            provider: true,
            socialId: true,
          },
        },
      },
    });
  }

  async findPostById(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            provider: true,
            socialId: true,
          },
        },
        comments: {
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            user: {
              select: {
                id: true,
                username: true,
                provider: true,
                socialId: true,
              },
            },
          },
        },
      },
    });
    if (!post) throw new NotFoundException();
    return post;
  }

  async createPost(userId: string, dto: CreatePostDto) {
    return await this.prismaService.post.create({
      data: { ...dto, userId },
    });
  }

  async deletePost(userId: string, id: string) {
    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException();
    if (post.userId !== userId) throw new UnauthorizedException();
    return await this.prismaService.post.delete({
      where: {
        id,
      },
    });
  }
}
