import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {

  // @ts-ignore
  post: Post = new Post();

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPostList() {
    this.router.navigate(['/posts'])
  }

  onSubmit() {
    console.log(this.post);
    this.postService.createPost(this.post).subscribe({
      next: data => {
        console.log(data);
        this.goToPostList();
      },
      error: err => console.log(err)
    })
  }
}
