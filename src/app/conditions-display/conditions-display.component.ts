import { Component, OnInit } from '@angular/core';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';

@Component({
  selector: 'app-conditions-display',
  templateUrl: './conditions-display.component.html',
  styleUrls: ['./conditions-display.component.scss']
})
export class ConditionsDisplayComponent implements OnInit {

  constructor(public fs: REDCapService) { }

  ngOnInit() {
  }

}
