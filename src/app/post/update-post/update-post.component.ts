import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent implements OnInit {

  uuid: string | undefined;
  // @ts-ignore
  post: Post = new Post();

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.postService.getPostById(this.uuid).subscribe({
      next: data => {
        this.post = data;
      },
      error: err => console.log(err)
    });
  }

  onSubmit() {
    console.log(this.post)
    this.postService.updatePost(this.post).subscribe({
      next: data => {
        this.goToPostList();
      },
      error: err => console.log(err)
    })
  }

  goToPostList() {
    this.router.navigate(['/posts']).then(r => {});
  }
}
