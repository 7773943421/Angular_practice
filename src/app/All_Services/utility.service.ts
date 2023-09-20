import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  getAllUsers(){
    return [
      {id:101,name:'Ashu',city:'Pune',salary:'2',dob:new Date("19/7/1999")},
      {id:101,name:'Ashu',city:'Pune',salary:'2',dob:new Date("19/7/1999")},
      {id:101,name:'Ashu',city:'Pune',salary:'2',dob:new Date("19/7/1999")},
      {id:101,name:'Ashu',city:'Pune',salary:'2',dob:new Date("19/7/1999")},
      {id:101,name:'Ashu',city:'Pune',salary:'2',dob:new Date("19/7/1999")}
    ];
  }
}
