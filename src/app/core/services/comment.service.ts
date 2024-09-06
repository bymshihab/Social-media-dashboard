import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../../features/comments/comment-list/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}
  getCommentsByPostId(postId: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}?postId=${postId}`);
  }
}
