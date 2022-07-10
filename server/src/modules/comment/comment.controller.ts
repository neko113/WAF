import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { Public } from 'src/common/decorators/public.decorator';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
@ApiTags('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Public()
  @Get()
  async getAllComments() {
    return await this.commentService.findComments();
  }

  @Public()
  @Get(':id')
  async getCommentById(@Param('id') id: string) {
    return await this.commentService.findCommentById(id);
  }

  @Post()
  async createComment(
    @GetCurrentUserId() userId: string,
    @Body() dto: CreateCommentDto,
  ) {
    return await this.commentService.createComment(userId, dto);
  }

  @Delete(':id')
  async deleteComment(
    @GetCurrentUserId() userId: string,
    @Param('id') id: string,
  ) {
    return await this.commentService.deleteComment(userId, id);
  }
}
