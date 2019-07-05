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
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFireFunctionsModule, FUNCTIONS_ORIGIN} from '@angular/fire/functions';

import {LayoutModule} from '@angular/cdk/layout';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FieldsModule} from './fields/fields.module';
import {ConditionsDisplayModule} from './conditions-display/conditions-display.module';

@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FormsModule,

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

    FieldsModule,
    ConditionsDisplayModule,
  ],
  entryComponents: [
    LoginDialogComponent,
  ],
  providers: [
    { provide: FUNCTIONS_ORIGIN, useValue: 'http://localhost:5000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
