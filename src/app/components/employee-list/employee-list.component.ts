import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:any;
  searchKeyword='';
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    let resp=this.employeeService.getAllEmployee();
    resp.subscribe((data)=>this.employees=data);
  }

  deleteEmployee(id:number){
    console.log(id);
    let resp= this.employeeService.deleteEmployee(id);
    resp.subscribe((data)=>this.employees=data);
 //resp.subscribe((data)=>this.users=data);
  }

  searchEmployee(): void {
    console.log(this.searchKeyword);
    this.employeeService.searchEmployeefirstNameOrLastNameOrPinCode(this.searchKeyword)
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
}
}