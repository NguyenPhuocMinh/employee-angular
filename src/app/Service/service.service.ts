import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8080/employee/employees";

  getEmployees() {
    return this.http.get<Employee[]>(this.Url);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee[]>(this.Url, employee);
  }
}
