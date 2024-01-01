import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe({
      next: data => {
        this.employees = data;
      },
      error: err => console.log(err)
    })
  }

  employeeDetails(uuid: string | undefined) {
    this.employeeService.getEmployeeById(uuid).subscribe({
      next: data => {
        this.router.navigate(['employee-details', uuid]);
      },
      error: err => console.log(err)
    })
  }

  deleteEmployee(uuid: string | undefined) {
    this.employeeService.deleteEmployee(uuid).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
