import { Component, OnInit } from '@angular/core';
import { UtilityService } from './All_Services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
users:any[];
  constructor(private _Utility:UtilityService ){

  }
  ngOnInit(): void {
   this.users= this._Utility.getAllUsers();
  }
 
}
