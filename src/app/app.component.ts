import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CreatePersonComponent} from "./person/create-person/create-person.component";
import {PersonListComponent} from "./person/person-list/person-list.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    CreatePersonComponent,
    PersonListComponent,
    RouterLink,
    RouterLinkActive,
    CreatePostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee accounting application';
}
