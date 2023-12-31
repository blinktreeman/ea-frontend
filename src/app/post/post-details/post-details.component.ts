import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {

  uuid: string | undefined;
  // @ts-ignore
  post: Post = new Post();

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.postService.getPostById(this.uuid).subscribe({
      next: data => {
        this.post = data;
      },
      error: err => console.log(err)
    })
  }
}
