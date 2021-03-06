import { IComment } from './comment.interface';
import { IUser } from './user.interface';

export interface IPost {
  id: string;
  title: string;
  body: string;
  userId: string;
  user: IUser;
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface IPostCreateRequest {
  title: string;
  body: string;
}
