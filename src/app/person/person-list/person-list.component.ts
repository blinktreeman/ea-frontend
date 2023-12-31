import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonService} from "../person.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit {

  persons: Person[] | undefined;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons() {
    this.personService.getPersonsList().subscribe(data => {
      this.persons = data;
    })
  }

  personDetails(uuid: string | undefined) {
    this.router.navigate(['person-details', uuid]);
  }

  updatePerson(person: Person) {
    this.router.navigate(['update-person', person]);
  }

  deletePerson(uuid: string | undefined) {
    this.personService.deletePerson(uuid).subscribe(data => {
      console.log(data);
      this.getPersons();
    })
  }
}
