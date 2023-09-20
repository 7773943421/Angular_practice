import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
url="https://jsonplaceholder.typicode.com/posts";
datas;
  constructor(private _http :HttpClient) { 
    this.loadPost();
  }

  ngOnInit() {
  }

  loadPost(){
this._http.get(this.url).subscribe((res =>{
  console.log(res);
  this.datas=res;
}))
  }

}
