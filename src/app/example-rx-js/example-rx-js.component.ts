import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-example-rx-js',
  templateUrl: './example-rx-js.component.html',
  styleUrls: ['./example-rx-js.component.css']
})
export class ExampleRxJsComponent implements OnInit {

   constructor() { }

  ngOnInit() {
    const numbers=[1,2,3,4,5];
     const sqaureEvens=of(...numbers) 
    // of operator create an observable from arry nuber
    .pipe(
      filter((num)=> num%2===0),
      map((num)=> num * num)
      // map used to square of number
    );
    sqaureEvens.subscribe((result)=> console.log(result));
    
  }


}
