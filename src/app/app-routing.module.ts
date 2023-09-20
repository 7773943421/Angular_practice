import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  // {path:'',redirectTo:'user',pathMatch:'full'},
  // {path:'user',component:UserComponent},
  // {path:'users/:id',component:UsersComponent},
  // {path:'about',component:AboutComponent},
  // {path:'conact',component:ContactComponent},
  // {path:'**',redirectTo:'user'}
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
