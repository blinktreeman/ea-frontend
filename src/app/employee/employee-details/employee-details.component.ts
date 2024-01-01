import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  uuid: string | undefined;
  employee: Employee | undefined;

  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.employeeService.getEmployeeById(this.uuid).subscribe({
      next: data => {
        this.employee = data;
      },
      error: err => console.log(err)
    })
  }
}
