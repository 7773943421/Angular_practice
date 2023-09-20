import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  // Create an AsyncSubject
   subject = new AsyncSubject<string>();
  constructor() { 
   this.subject.subscribe(value => console.log(value)); 
  }
  

  ngOnInit() {
    this.subject.next('Value 1');
   this. subject.next('Value 2');
    this.subject.next('Value 3');
   this. subject.complete(); // Complete the subject
  }
  

}
