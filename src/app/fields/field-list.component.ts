import { Component, OnInit } from '@angular/core';
import {REDCapService} from 'ng-redcap';
import {Field} from 'ng-redcap';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields: Field[];

  constructor(private fs: REDCapService) { }

  ngOnInit() {
    this.fields = this.fs.fields;
  }

}
