import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {LoginDialogComponent} from '../app-auth/login-dialog/login-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';
import {LogoutDialogComponent} from '../app-auth/logout-dialog/logout-dialog.component';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {SubmitDialogComponent} from '../submit-dialog/submit-dialog.component';
import {SmsLoginDisplayComponent} from '../app-auth/sms-login-display/sms-login-display.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isLoggedIn = false;
  user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog,
    private fieldService: REDCapService,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = (user !== null);

      if (this.isLoggedIn) {
        this.fieldService.loadUserRecords('adolescent_preferences')
          .then((result) => {
            // this.values = result;
          }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.afAuth.auth.signOut();
      }
    });
  }

  openEmailLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openPhoneLoginDialog(): void {
    const dialogRef = this.dialog.open(SmsLoginDisplayComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  save(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fieldService.submitFields({adolescent_preferences_complete: '0'})
        .then(() => {
          console.log('Save successful');
          this.openSnackBar('Selections Saved', 'dismiss');
          resolve();
        }).catch(reason => {
          console.log('rejected submission: ' + reason);
          this.openSnackBar('There was an error saving selections', 'dismiss');
          reject(reason);
        }
      );
    });
  }

  submit(): void {
    const submitDialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '350px',
    });

    submitDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fieldService.submitFields({adolescent_preferences_complete: '1'})
          .then(() => {
            console.log('Submit successful');
            this.openSnackBar('Submit Successful', 'dismiss');
          }).catch(reason => {
            console.log('rejected submission: ' + reason);
            this.openSnackBar('There was an error submitting selections', 'dismiss');
          }
        );
      }
    });
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
