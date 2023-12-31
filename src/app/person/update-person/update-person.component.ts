import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonService} from "../person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-person',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent implements OnInit {

  // @ts-ignore
  person: Person = new Person();
  uuid: string | undefined;

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.personService.getPersonById(this.uuid).subscribe({
      next: data => {
        this.person = data;
      },
      error: err => console.log(err)
    });
  }

  onSubmit() {
    console.log(this.person)
    this.personService.updatePerson(this.person).subscribe({
      next: data => {
        this.goToPersonList();
      },
      error: err => console.log(err)
    })
  }

  goToPersonList() {
    this.router.navigate(['/persons']).then(r => {});
  }

}
