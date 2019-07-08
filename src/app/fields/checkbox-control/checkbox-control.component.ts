import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {CheckboxField} from '../../../../projects/ng-redcap/src/field/checkbox-field';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlComponent),
  multi: true
};

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CheckboxControlComponent implements OnInit, ControlValueAccessor {
  optionKeys: string[];

  @Input() field: CheckboxField;

  constructor() { }

  ngOnInit() {
    if (this.field instanceof CheckboxField) {
      this.optionKeys = Array.from(this.field.getOptions().keys());
    } else {
      console.log('field is not an instance of Checkbox field: ');
      console.log(this.field);
    }
  }

  get value() {
    return this.field.value;
  }

  set value(val: any) {
    if (this.field.value !== val) {
      this.field.value = val;
      this.propogateChange(this.field.value);
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
