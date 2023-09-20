import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const source = from([1,2,3,4,5]);

    // filter out non-even numbers 

    const res = source.pipe(filter(num => num % 2 != 0));

    res.subscribe(res => {
      console.log('after filter', res);
    })

    let obs1 = of(1,2,3);
    let obs2 = of(4,5,6);
   
     obs1.pipe(
      mergeMap(value1 => obs2.pipe(map(value2 => value1 +'' + value2)))
     ).subscribe(res => {
      console.log(res);
     })

  }

  

}
