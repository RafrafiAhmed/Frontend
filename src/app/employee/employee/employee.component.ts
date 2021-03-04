import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  data:any;
  constructor(private emplyeeService:EmployeeService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData(){
    this.emplyeeService.getData().subscribe(res =>{
      console.log(res);
      this.employees=res;
    })
  }
  deleteData(id){
    this.emplyeeService.deleteData(id)
    .subscribe(res =>{
      this.data= res;
      this.toastr.error(JSON.stringify(this.data.code),
      JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      })
          this.getEmployeeData()
    })
  }

}
