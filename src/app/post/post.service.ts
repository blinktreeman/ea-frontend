import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = "http://localhost:8080/api/v1/post";

  constructor(private httpClient: HttpClient) { }

  getPostList(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/all`);

  }

  createPost(post: Post): Observable<Object> {
    return this.httpClient.post(`${this.BASE_URL}/add`, post);
  }

  getPostById(uuid: string | undefined): Observable<Post> {
    return this.httpClient.get<Post>(`${this.BASE_URL}/get?uuid=${uuid}`);
  }

  updatePost(post: Post): Observable<Object> {
    return this.httpClient.put(`${this.BASE_URL}/update`, post);
  }

  deletePost(uuid: string | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.BASE_URL}/delete?uuid=${uuid}`);
  }
}
