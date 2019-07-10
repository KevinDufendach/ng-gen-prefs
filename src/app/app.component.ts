import {Component, OnInit} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {REDCapService} from '../../projects/ng-redcap/src/field/redcap.service';
import {MatDialog} from '@angular/material';
import {InstructionsDialogComponent} from './instructions-dialog/instructions-dialog.component';

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
              ) {
    this.fs = fieldService;

    console.log('loading project data');
    this.fieldService.loadProjectData('adolescent_preferences')
      .then(result => {
        console.log('project data received');
        console.log(result);
      });
  }

  ngOnInit(): void {
    this.displayInstructions();
  }

  displayInstructions(): void {
    this.dialog.open(InstructionsDialogComponent, {
      minWidth: '350px',
      maxWidth: '600px',
      hasBackdrop: true
    });
  }


}
