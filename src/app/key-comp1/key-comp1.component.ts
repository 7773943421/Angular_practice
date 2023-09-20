import { Component, OnInit } from '@angular/core';
import { KeyServiceService } from '../Service/key-service.service';

@Component({
  selector: 'app-key-comp1',
  templateUrl: './key-comp1.component.html',
  styleUrls: ['./key-comp1.component.css']
})
export class KeyComp1Component implements OnInit {
 unqiue=[];
  constructor(private http:KeyServiceService) { }

  ngOnInit() 
  {
     let body={name:'smith'};
     this.http.list(body).subscribe(res=>{
   let data= res.result.sportList  ;
     for(let index=0;index<data.length;index++){
         this.unqiue.push(data[index].st);
     }
     let newArray=[...new Set(...this.unqiue)];
   console.log(newArray);
       
    });
    this.postitem();
   
  }
  postitem(){
    let body={
      id : new Date().getTime(),
      title: `Cricket, ssoocer ,tennies`
    }

this.http.info(body).subscribe(res=>{
  console.log(res);
})
  }
}
