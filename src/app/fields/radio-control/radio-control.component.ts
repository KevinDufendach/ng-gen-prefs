import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {RadioField} from '../../../../projects/ng-redcap/src/field/radio-field';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlComponent),
  multi: true
};

export const CUSTOM_INPUT_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RadioControlComponent),
  multi: true,
};

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.css'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    CUSTOM_INPUT_VALIDATOR,
  ],
})
export class RadioControlComponent implements OnInit, ControlValueAccessor, Validator {
  optionKeys: string[];
  private onValidationChangeCallback: (_: any) => void = noop;

  @Input() field: RadioField;
  // @Input('value') internalVal: any;

  constructor( ) {
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

  registerOnValidatorChange(fn: () => void): void {
    this.onValidationChangeCallback = fn;
  }

  validate(control: FormControl): ValidationErrors | null {
    return (this.isValid() ? null : {
      valueExistsError: {
        valid: false,
      },
    });
  }

  protected isValid() {
    return (this.value && this.value !== '-1');
  }
}
