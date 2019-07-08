import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioField} from '../../../../projects/ng-redcap/src/field/radio-field';

// const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlComponent),
  multi: true
};

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class RadioControlComponent implements OnInit, ControlValueAccessor {
  optionKeys: string[];

  @Input() field: RadioField;
  // tslint:disable-next-line:variable-name
  _value: string;

  constructor( ) {
  }

  get value() {
    return this._value;
  }

  set value(val: any) {
    console.log('setting value');
    if (this._value !== val) {
      this._value = val;
      this.field.value = val;
      this.propogateChange(this._value);
    }
  }

  ngOnInit() {
    if (this.field instanceof RadioField) {
      this.optionKeys = Array.from(this.field.getOptions().keys());
    } else {
      console.log('field is not an instance of RadioField: ');
      console.log(this.field);
    }
  }

  propogateChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: any) {
    this.value = val;
  }
}
