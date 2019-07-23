import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EntryDialogComponent>, public rs: REDCapService) { }

  // manualFieldNames = [
  //   'include_all_adol',
  //   'preventable_adol',
  //   'treatable_adol',
  //   'adult_onset_adol',
  //   'carrier_adol',
  //   // 'parental_involve_adol',
  //   // 'manual_include_adol',
  //   // 'manual_exclude_adol',
  //   // 'man_incl_car_adol',
  //   // 'man_excl_car_adol',
  // ];

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
