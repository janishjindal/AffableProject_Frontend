import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserInfo, PredictionInfo } from '../UserInfo';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable()
export class CallAPIService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CallAPIService');
  }
  // URL to web api
  apiUrl = 'http://127.0.0.1:5000/predict';
  /**
     * 
     * Services an API call by sending a `POST` request to the API URL and
     * returns an observable of the response
     *
     * @param userinfo An object of type `UserInfo` containing input user-profile fields
     *
     * @return  An `Observable` of the `HttpResponse` for the request with a response body of
     *  type `PredictionInfo`
     * 
     * ### Sample Response 
     *  {
     *     "isBrand": "False", 
     *     "username": "janish"
     *   }   
     */
  callPredictAPI(userinfo: UserInfo):  Observable<PredictionInfo> {
    console.log(this.http.post<PredictionInfo>(this.apiUrl, userinfo));
    return this.http.post<PredictionInfo>(this.apiUrl, userinfo);
       
  }


}
