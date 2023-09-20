import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyServiceService {
  list(body: { name: string; }) {
    throw new Error('Method not implemented.');
  }
url:"https://api.hattrick.games/api/Account/GetGuestMLConfig";
  constructor(private Http_:HttpClient) { }

  info(body:any):Observable<any> {
    return this.Http_.post(this.url,{});
  }
}
