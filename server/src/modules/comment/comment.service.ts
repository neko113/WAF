import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async findComments() {
    return await this.prismaService.comment.findMany({
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

  async findCommentById(id: string) {
    const comment = await this.prismaService.comment.findUnique({
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
      },
    });
    if (!comment) throw new NotFoundException();
    return comment;
  }

  async createComment(userId: string, dto: CreateCommentDto) {
    return await this.prismaService.comment.create({
      data: { ...dto, userId },
    });
  }

  async deleteComment(userId: string, id: string) {
    const exist = await this.prismaService.comment.findUnique({
      where: { id },
    });
    if (!exist) throw new NotFoundException();
    if (exist.userId !== userId) throw new UnauthorizedException();
    return await this.prismaService.comment.delete({
      where: { id },
    });
  }
}