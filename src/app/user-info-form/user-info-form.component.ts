import { Component, Injectable } from '@angular/core';
import { CallAPIService } from '../appServices/call-api.service';
import { PredictionInfo, UserInfo } from '../UserInfo';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})


export class UserInfoFormComponent {  
  // user is an object of Class UserInfo containing requisite user-info fileds
  // Also instantiating the user with default values

  user = new UserInfo(1, 'janish', 'I am a newbie at Angular', 0, 0, 0, 0, 0, 10, 2, 0, 0, "False", "http://localhost:1234", "student", 0, 0, 0, "www.google.com", "[('neck',0.95,0.95), ('head', 0.78. 0.78)]", "False" );
  submitted = false; 
  predictionInfo = new PredictionInfo();  
  constructor(private _callPredictAPIService: CallAPIService) {}
  
  onSubmit(): void {
    this.submitted = true;    
  }
  /**
     * Sends user-profile data of type `UserInfo` to `CallAPIService` object and
     * later subscribes to the serivice response data ("isBrand" prediction) 
     * 
     * ### Sample Response 
     *  {
     *     "isBrand": "False", 
     *     "username": "janish"
     *   } 
     */
  //
  sendUserInfo() : void {    
     const newUserInfo: UserInfo = this.user;
     console.log(newUserInfo);
     this._callPredictAPIService
       .callPredictAPI(newUserInfo)
       .subscribe( (data) => {
         console.log(data)         
         this.predictionInfo = data;         
       }); 
  }

}
