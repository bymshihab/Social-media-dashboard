import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postServices: PostService) {}
  ngOnInit(): void {
    this.postServices.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
