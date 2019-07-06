import { Component, OnInit } from '@angular/core';
import {REDCapService} from 'ng-redcap';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  constructor(private fs: REDCapService) { }

  ngOnInit() {
  }

}
