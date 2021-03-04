import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
const appRoutes=[
  {
    path: '', component:EmployeeComponent
  },
  {
    path:'add-employee', component:AddEmployeeComponent
  },
  {
    path:'edit/:id', component:EditEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    ToastrModule.forRoot(),//ToastrModule added
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
