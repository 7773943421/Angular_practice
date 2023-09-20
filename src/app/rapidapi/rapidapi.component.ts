import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../Service/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

 // Inject the rapid api service

 constructor(private rapidApiService: RapidapiService) { }

  ngOnInit() {
    this.rapidApiService.getDataYahooFinance().subscribe( res => {

      console.log('getting data from rapid API ', res);

    })
  }

}
