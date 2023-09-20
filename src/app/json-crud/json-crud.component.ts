import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../All_Services/json-service.service';

@Component({
  selector: 'app-json-crud',
  templateUrl: './json-crud.component.html',
  styleUrls: ['./json-crud.component.css']
})
export class JsonCRUDComponent implements OnInit {

  posts;
  constructor(private _http:JsonServiceService) {

   }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
ngOnInit() {
  this._http.getALL().subscribe((ans =>{
    console.log(ans);
    this.posts= ans;
  }))
  
  }
  onClick(){
    let body={
      name:'smith'
    }
    this._http.posts(body).subscribe(res=>{
      console.log(res);
      
    })
  }
  click(id){
    let body={
      name:'rohit'
    }
    this._http.update(id,body).subscribe(res=>{
      console.log(res);
      
    })
    this._http.delete(id).subscribe(res=>{
      console.log(res);
      
    })
  }

}
