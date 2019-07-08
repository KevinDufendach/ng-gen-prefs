import { Component, OnInit } from '@angular/core';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';
import {ConditionsService} from '../conditions/conditions.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-conditions-display',
  templateUrl: './conditions-display.component.html',
  styleUrls: ['./conditions-display.component.scss'],
  animations: [
    trigger(
      'expandAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class ConditionsDisplayComponent implements OnInit {

  constructor(public fs: REDCapService, public cs: ConditionsService) { }

  ngOnInit() {
  }

  manualInclude(id: string, state: boolean) {
    this.fs.getField('manual_include_adol').value[id] = state;
    if (state) {
      this.fs.getField('manual_exclude_adol').value[id] = false;
    }
  }

  manualExclude(id: string, state: boolean) {
    this.fs.getField('manual_exclude_adol').value[id] = state;
    if (state) {
      this.fs.getField('manual_include_adol').value[id] = false;
    }
  }

}
