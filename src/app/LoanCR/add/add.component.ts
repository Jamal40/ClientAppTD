import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../ViewModels/employee';
import { ListComponent } from '../list/list.component';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [EmployeesService]
})
export class AddComponent implements OnInit {

  private name: string;
  private job: string;
  private age: number;
  newEmp: Employee;

  @ViewChild('alert', { static: true }) alert: ElementRef;

  constructor(private employeeService: EmployeesService, private route: Router) { }

  ngOnInit() {
  }

  addEmp(value: any) {
    console.log(value);
    //this.employeeService.addEmp({ name: value.Empname, age: value.age, job: value.job }).then(() => {
    //    this.alert.nativeElement.classList.add('show');
    //    this.route.navigate(['/all']);
    //  })
    this.employeeService.addEmp({ name: value.Empname, age: value.age, job: value.job });
    this.alert.nativeElement.classList.add('show');
    this.route.navigate(['/all']);
  };
}
