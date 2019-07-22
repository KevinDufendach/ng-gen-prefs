import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';

@Component({
  selector: 'app-question-stepper',
  templateUrl: './question-stepper.component.html',
  styleUrls: ['./question-stepper.component.scss']
})
export class QuestionStepperComponent implements OnInit {
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  manualFieldNames = [
    'include_all_adol',
    'preventable_adol',
    'treatable_adol',
    'adult_onset_adol',
    'carrier_adol',
    // 'parental_involve_adol',
    // 'manual_include_adol',
    // 'manual_exclude_adol',
    // 'man_incl_car_adol',
    // 'man_excl_car_adol',
  ];

  @Output() complete = new EventEmitter();

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, public rs: REDCapService) {}

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onComplete() {
    this.complete.emit();
  }
}
