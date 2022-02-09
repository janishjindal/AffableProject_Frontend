import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CallAPIService } from './appServices/call-api.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CallAPIService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
