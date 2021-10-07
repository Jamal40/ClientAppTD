import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from '../../ViewModels/employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [EmployeesService]
})

export class ListComponent implements OnInit {

  private empList;

  @ViewChild('alert', { static: true }) alert: ElementRef;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    //this.empList = this.employeeService.getAll();
    return this.employeeService.getAll().subscribe(emps => {
      this.empList = emps;
    });
  }

  Delete() {
    this.alert.nativeElement.classList.add('show');
  }

  cancel() {
    this.alert.nativeElement.hide();
  }

  DeleteEmp(id: number) {
    return this.employeeService.deleteEmp(id);
    //return this.employeeService.delete(emp).then(() => {
    //  this.employeeService.getAll();
    //});
  }

}
