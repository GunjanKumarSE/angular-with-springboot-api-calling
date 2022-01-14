import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee={
    firstName: "",
    lastName: "",
    address: "",
    pinCode:0,
    email: "",
    gender: "",
    married: "",
    birthday:Date,
    profession: "",
    dateofjoining:Date,
    salary:0
};
submitted = false;

  constructor(private employeeService:EmployeeService) { }
  ngOnInit(): void {
  }

  saveEmployee():void{
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      address:this.employee.address,
      pinCode:this.employee.pinCode,
      email:this.employee.email,
      gender:this.employee.gender,
      married:this.employee.married,
      birthday:this.employee.birthday,
      profession:this.employee.profession,
      dateofjoining:this.employee.dateofjoining,
      salary:this.employee.salary
    };

    this.employeeService.createEmployee(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.employee= {
      firstName: "",
    lastName: "",
    address: "",
    pinCode:0,
    email: "",
    gender: "",
    married: "",
    birthday:Date,
    profession: "",
    dateofjoining:Date,
    salary:0
    };

}
}