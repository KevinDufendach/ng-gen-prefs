import {Component, OnInit} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {REDCapService} from '../../projects/ng-redcap/src/field/redcap.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LogoutDialogComponent} from './app-auth/logout-dialog/logout-dialog.component';
import {SubmitDialogComponent} from "./submit-dialog/submit-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fs: REDCapService;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private fns: AngularFireFunctions,
              private fieldService: REDCapService,
              public dialog: MatDialog,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    this.fs = fieldService;

    console.log('loading project data');
    this.fieldService.loadProjectData('adolescent_preferences')
      .then(result => {
        console.log('project data received');
        console.log(result);
      });
  }

  ngOnInit(): void {
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
