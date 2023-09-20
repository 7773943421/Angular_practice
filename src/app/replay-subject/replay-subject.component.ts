import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
// Create a ReplaySubject with a buffer size of 2
 subject = new ReplaySubject<string>(2);

  constructor() { 
    this.subject.subscribe(value => console.log(value));
  }

  ngOnInit() {
    this.subject.next('Value 1');
    this.subject.next('Value 2');
    this.subject.next('Value 3');
    this.subject.next('Value 4');
  }
  

}
