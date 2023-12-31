import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonService} from "../person.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent implements OnInit {

  // @ts-ignore
  person: Person = new Person();

  // @Input() person: Person;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  savePerson() {
    this.personService.createPerson(this.person).subscribe({
      next: data => {
        console.log(data);
        this.goToPersonList();
      },
      error: err => console.log(err)
    })
  }

  goToPersonList() {
    this.router.navigate(['/persons']);
  }

  onSubmit() {
    console.log(this.person);
    this.personService.createPerson(this.person).subscribe({
      next: data => {
        console.log(data);
        this.goToPersonList();
      },
      error: err => console.log(err)
    })
    // console.log(this.person);
    // this.savePerson();
  }
}
