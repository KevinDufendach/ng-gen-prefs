import {Component, OnInit} from '@angular/core';
import {PhoneNumber} from './phone-number';
import {WindowService} from '../../window.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sms-login-display',
  templateUrl: './sms-login-display.component.html',
  styleUrls: ['./sms-login-display.component.scss']
})
export class SmsLoginDisplayComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  errorMessage = '';

  constructor(
    private win: WindowService,
    private afAuth: AngularFireAuth,
    private dialogRef: MatDialogRef<SmsLoginDisplayComponent>) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user !== null) {
        this.dialogRef.close(user.uid + ' successfully logged in');
      }
    });

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;

    this.afAuth.auth.signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch(error => {
        return console.log(error);
      });

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .catch(error => {
        this.errorMessage = 'There was an error logging in. Did you enter the correct code?';
        return console.log(error, 'Incorrect code entered?');
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
