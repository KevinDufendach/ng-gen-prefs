import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss']
})
export class SubmitDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubmitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }
}
