import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireFunctionsModule, FUNCTIONS_ORIGIN} from '@angular/fire/functions';

import {LayoutModule} from '@angular/cdk/layout';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { LoginDialogComponent } from './app-auth/login-dialog/login-dialog.component';
import {FieldsModule} from './fields/fields.module';
import {ConditionsDisplayModule} from './conditions-display/conditions-display.module';
import {HttpClientModule} from '@angular/common/http';
import { LogoutDialogComponent } from './app-auth/logout-dialog/logout-dialog.component';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import {SmsLoginDisplayComponent} from './app-auth/sms-login-display/sms-login-display.component';
import {AppAuthModule} from "./app-auth/app-auth.module";

@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent,
    LoginDialogComponent,
    LogoutDialogComponent,
    SubmitDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FormsModule,
    HttpClientModule,

    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,

    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,

    FieldsModule,
    ConditionsDisplayModule,
    AppAuthModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    LogoutDialogComponent,
    SubmitDialogComponent,
    SmsLoginDisplayComponent,
  ],
  providers: [
    {provide: FUNCTIONS_ORIGIN, useValue: 'http://localhost:5000'}
  ],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
