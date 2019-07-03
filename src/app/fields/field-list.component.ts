import { Component, OnInit } from '@angular/core';
import {FieldService} from '../../../projects/ng-redcap/src/field/field.service';
import {Field} from '../../../projects/ng-redcap/src/field/field';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields: Field[];

  constructor(private fs: FieldService) { }

  ngOnInit() {
    this.fields = this.fs.fields;
  }

}
