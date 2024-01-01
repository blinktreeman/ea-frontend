import {Routes} from '@angular/router';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {CreatePersonComponent} from "./person/create-person/create-person.component";
import {UpdatePersonComponent} from "./person/update-person/update-person.component";
import {PersonDetailsComponent} from "./person/person-details/person-details.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {UpdatePostComponent} from "./post/update-post/update-post.component";
import {PostDetailsComponent} from "./post/post-details/post-details.component";
import {PostListComponent} from "./post/post-list/post-list.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee/employee-details/employee-details.component";

export const routes: Routes = [
  // Home
  {path: 'home', component: HomePageComponent},
  // Person
  {path: 'persons', component: PersonListComponent},
  {path: 'create-person', component: CreatePersonComponent},
  {path: 'update-person', component: UpdatePersonComponent},
  {path: 'person-details/:uuid', component: PersonDetailsComponent},
  // Post
  {path: 'posts', component: PostListComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'update-post', component: UpdatePostComponent},
  {path: 'post-details/:uuid', component: PostDetailsComponent},
  // Employee
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee-details/:uuid', component: EmployeeDetailsComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
