import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit {

  uuid: string | undefined;
  // @ts-ignore
  person: Person = new Person();

  constructor(private route: ActivatedRoute,
              private personService: PersonService) {
  }

  ngOnInit() {
    this.uuid = this.route.snapshot.params['uuid'];
    this.personService.getPersonById(this.uuid).subscribe({
      next: data => {
        this.person = data;
      },
      error: err => console.log(err)
    })
  }
}
