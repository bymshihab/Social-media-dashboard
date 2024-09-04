import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent, PostCreateComponent],
  imports: [CommonModule],
  exports: [PostListComponent, PostDetailComponent, PostCreateComponent],
})
export class PostsModule {}
