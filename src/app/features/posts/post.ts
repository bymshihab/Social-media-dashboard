import { Comments } from '../comments/comment-list/comments';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comments[];
}
