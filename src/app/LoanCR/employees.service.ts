import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../ViewModels/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = 'https://localhost:44348/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl + 'api/index');
  }

  deleteEmp(id: number) {
    return this.http.delete(this.baseUrl + 'api/index/delete' + id);
  }

  UpdateEmp(id: number, newName: string, newJob: string, newAge: number) {
    return this.http.put(this.baseUrl + 'api/index/' + id, { newName, newJob,  newAge });
  }

  addEmp(newEmp: Employee) {
    return this.http.post(this.baseUrl + 'api/index/', Employee);
  }

  //getAll() {
  //  return new Promise(resolve => resolve(this.Employees));
  //}

  //addEmp(emp) {
  //  return new Promise(resolve => {
  //    this.Employees.push(emp);
  //    resolve(emp);
  //  });
  //}

  //put(changed: Employee) {
  //  return new Promise(resolve => {
  //    const index = this.Employees.findIndex(emp => emp === changed);
  //    this.Employees[index].name = changed.name;
  //    this.Employees[index].job = changed.job;
  //    this.Employees[index].age = changed.age;
  //    resolve(changed);
  //  });
  //}

  //delete(selected) {
  //  return new Promise(resolve => {
  //    const index = this.Employees.findIndex(emp => emp === selected);
  //    this.Employees.splice(index, 1);
  //    resolve(true);
  //  });
  //}

}
