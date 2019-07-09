import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsLoginDisplayComponent } from './sms-login-display/sms-login-display.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SmsLoginDisplayComponent],
  exports: [
    SmsLoginDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AppAuthModule { }
