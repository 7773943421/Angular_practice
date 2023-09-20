import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService  {
url="https://jsonplaceholder.typicode.com/users";
  constructor(private _http:HttpClient) {

   }
   getALL () {
  return this._http.get(this.url);
}
posts(body){
  return this._http.post(this.url,body);
}
update(id,body){
return this._http.put(this.url+'/'+id,body);
}
delete(id){
  return this._http.delete(this.url+'/'+id);
}
}
