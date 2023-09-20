import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
postUrl="https://jsonplaceholder.typicode.com/posts";
  constructor(private _http:HttpClient) {}

   GetAllPost(): Observable<any>{
     return this._http.get(this.postUrl);
   }

   GetPostById(id:any){
   
return this._http.get(this.postUrl+ id)
   }

   UpdatePostById(id:any,body:any){
return this._http.put(this.postUrl + id,body)
   }
   DeletePostById(id:any){
return this._http.delete(this.postUrl+ id)
   }
   CreatePost(body:any){
    return this._http.post(this.postUrl,body);
   }
}
