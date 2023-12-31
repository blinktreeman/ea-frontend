import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private BASE_URL = "http://localhost:8080/api/v1/person";

  // TODO: properties, body, headers

  constructor(private httpClient: HttpClient) {
  }

  getPersonList(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.BASE_URL}/all`);
  }

  createPerson(person: Person): Observable<Object> {
    return this.httpClient.post(`${this.BASE_URL}/add`, person);
  }

  getPersonById(uuid: string | undefined): Observable<Person> {
    return this.httpClient.get<Person>(`${this.BASE_URL}/get?uuid=${uuid}`);
  }

  updatePerson(person: Person): Observable<Object> {
    return this.httpClient.put(`${this.BASE_URL}/update`, person);
  }

  deletePerson(uuid: string | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.BASE_URL}/delete?uuid=${uuid}`);
  }
}
