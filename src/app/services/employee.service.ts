import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    return this.http.get(`${baseUrl}getAllEmployees`);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${baseUrl}getEmployeeById/${id}`)
  }

  createEmployee(data:any):Observable<any>{
    return this.http.post(`${baseUrl}createEmployee`,data);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${baseUrl}hardDelete/${id}`);
  }

  updateEmployee(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}updateEmployee/${id}`, data);
  }

 // /searchEmployeefirstNameOrLastNameOrPinCode/{keyword}
  searchEmployeefirstNameOrLastNameOrPinCode(keyword:string): Observable<any> {
    return this.http.get(`${baseUrl}searchEmployeefirstNameOrLastNameOrPinCode/${keyword}`);
  }
}
