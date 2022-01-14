import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  currentEmployee={
    id:0,
    firstName: "",
    lastName: "",
    address: "",
    pinCode:0,
    email: "",
    gender: "",
    married: "",
    birthday:"",
    profession: "",
    dateofjoining:"",
    salary:0
};
  message='';

  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id:any): void {
    this.employeeService.getEmployeeById(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.employeeService.updateEmployee(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
