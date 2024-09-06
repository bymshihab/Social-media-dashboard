import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postServices: PostService,
    private commentService: CommentService
  ) {}
  ngOnInit(): void {
    this.postServices.getPosts().subscribe((data) => {
      this.posts = data;

      this.posts.forEach((post) => {
        this.commentService
          .getCommentsByPostId(post.id)
          .subscribe((comment) => {
            post.comments = comment;
          });
      });
    });
  }
}
