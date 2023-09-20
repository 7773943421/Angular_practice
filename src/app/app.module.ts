import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityService } from './All_Services/utility.service';
import { JsonCRUDComponent } from './json-crud/json-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonServiceService } from './All_Services/json-service.service';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { ApiComponent } from './api/api.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';
import { PostComponentComponent } from './Service/post-component/post-component.component';
import { TodoService } from './Service/todo.service';
import { ExampleRxJsComponent } from './example-rx-js/example-rx-js.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { KeyComp1Component } from './key-comp1/key-comp1.component';
import { KeyServiceService } from './Service/key-service.service';
@NgModule({
  declarations: [
    AppComponent,
    JsonCRUDComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    TodoComponent,
    ApiComponent,
    RxjsComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    PostComponentComponent,
    ExampleRxJsComponent,
    RapidapiComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    KeyComp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [UtilityService,JsonServiceService,TodoService,KeyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
