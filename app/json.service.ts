import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'

})
export class JsonService {

  constructor(private http: HttpClient) { }

  verJson(APIUrl) {
   // return this.http.get(APIUrl.baseUrl + '/api/Authors');
    return this.http.get<Array<{}>>(APIUrl).pipe(map(data => data));
  }


}


