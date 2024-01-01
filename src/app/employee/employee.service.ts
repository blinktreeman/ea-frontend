import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL = "http://localhost:8080/api/v1/employee";

  // TODO: properties, body, headers

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.BASE_URL}/all`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.BASE_URL}/add`, employee);
  }

  getEmployeeById(uuid: string | undefined): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.BASE_URL}/get?uuid=${uuid}`);
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.BASE_URL}/update`, employee);
  }

  deleteEmployee(uuid: string | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.BASE_URL}/delete?uuid=${uuid}`);
  }
}
