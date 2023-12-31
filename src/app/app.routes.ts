import {Routes} from '@angular/router';
import {PersonListComponent} from "./person/person-list/person-list.component";
import {CreatePersonComponent} from "./person/create-person/create-person.component";
import {UpdatePersonComponent} from "./person/update-person/update-person.component";
import {PersonDetailsComponent} from "./person/person-details/person-details.component";

export const routes: Routes = [
  {path: 'persons', component: PersonListComponent},
  {path: 'create-person', component: CreatePersonComponent},
  {path: 'update-person', component: UpdatePersonComponent},
  {path: 'person-details/:uuid', component: PersonDetailsComponent},
  {path: '', redirectTo: 'persons', pathMatch: 'full'}
];
