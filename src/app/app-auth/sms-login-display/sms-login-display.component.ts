import { Component, OnInit } from '@angular/core';
import {PhoneNumber} from './phone-number';
import {WindowService} from '../../window.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sms-login-display',
  templateUrl: './sms-login-display.component.html',
  styleUrls: ['./sms-login-display.component.scss']
})
export class SmsLoginDisplayComponent implements OnInit {
  windowRef: any;

  phoneNumber = new PhoneNumber();

  verificationCode: string;

  user: any;

  constructor(private win: WindowService) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {

        this.windowRef.confirmationResult = result;

      })
      .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then( result => {

        this.user = result.user;

      })
      .catch( error => console.log(error, 'Incorrect code entered?'));
  }


}
