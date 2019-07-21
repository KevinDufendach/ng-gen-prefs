import {Component, forwardRef, Input} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {Field, FieldType} from '../../../projects/ng-redcap/src/field/field';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FieldComponent),
  multi: true
};

export const CUSTOM_INPUT_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => FieldComponent),
  multi: true,
};

@Component({
  selector: 'rcap-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    CUSTOM_INPUT_VALIDATOR,
  ]
})
export class FieldComponent implements ControlValueAccessor, Validator {
  @Input() field: Field<any>;
  // Access to FieldType enum
  FieldType = FieldType;
  myForm: FormGroup;
  // Placeholders for the callbacks which are later provided
  private innerValue: any = '';
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  private onValidationChangeCallback: (_: any) => void = noop;
  private isDisabled: boolean;

  // get acessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call te onchange callack
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // from ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
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
    return (this.innerValue !== '');
  }
}
