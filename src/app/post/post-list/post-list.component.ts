import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postService.getPostList().subscribe(data => {
      this.posts = data;
    });
  }

  postDetails(uuid: string | undefined) {
    this.router.navigate(['/post-details', uuid]);
  }

  createPost() {
    this.router.navigate(['/create-post']);
  }

  updatePost(post: Post) {
    this.router.navigate(['/update-post', post]);
  }

  deletePost(uuid: string | undefined) {
    this.postService.deletePost(uuid).subscribe({
      next: data => {
        console.log(data);
        this.getPosts();
      },
      error: err => console.log(err)
    })
  }
}
