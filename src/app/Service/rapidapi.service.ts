import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class RapidapiService {

 

   rapidApiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';

   headers = new HttpHeaders({

    'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',

    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'

   })

   constructor(private httpClient: HttpClient) { }

 

  getDataYahooFinance() : Observable<any>  {

    let params = new HttpParams();

    params = params.append('q', 'tesla');

    params = params.append('region', 'US');

return this.httpClient.get(this.rapidApiUrl, { headers: this.headers, params: params} )
  }

}