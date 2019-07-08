import {REDCapFieldMetadata} from './redcap-field-metadata';
import {Observer} from 'rxjs';

export enum FieldType {
  Radio,
  Checkbox,
  Other,
}

export abstract class Field<T> {
  fieldName: string;
  fieldType: FieldType;
  fieldLabel: string;
  fieldNote: string;
  // textValidationTypeOrShowSliderNumber?: string;
  // textValidationMin?: string;
  // textValidationMax?: string;
  // identifier?: string;
  branchingLogic?: string;
  // requiredField?: string;
  // customAlignment?: string;
  // questionNumber?: string;
  // matrixGroupName?: string;
  // matrixRanking?: string;
  // fieldAnnotation?: string;

  observers = new Array<Observer<T>>();

  // tslint:disable-next-line:variable-name
  private _value: T;

  constructor(md: REDCapFieldMetadata) {
    this.fieldName = md.field_name;
    this.fieldLabel = md.field_label;
    this.fieldNote = md.field_note;
    this.branchingLogic = md.branching_logic;
    this.fieldType = this.getType();
    this.setOptions(md.select_choices_or_calculations);
  }

  static getOptionMapFromString(optionsString: string) {
    const options = new Map<string, string>();
    const ops = optionsString.split('|'); // TODO: determine what happens when there's a pipe in the string

    for (const op of ops) {
      const optionRegEx = /([\-\w\d]+),\s(.*)/g; // note: need to set with each iteration
      const match = optionRegEx.exec(op);
      if (match && match.length > 2) {
        options.set(match[1], match[2]);
      } else {
        console.log('no match found: ' + op);
      }
    }

    return options;
  }

  subscribe(observer: Observer<T>) {
    this.observers.push(observer);
  }

  onValueChange(val: T) {
    this.observers.forEach(observer => {
      observer.next(val);
    });
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    if (this._value !== value) {
      this._value = value;
      this.onValueChange(value);
    }
  }

  shouldDisplay(): boolean {
    return (this.branchingLogic !== 'FALSE');
  }

  abstract getType(): FieldType;

  abstract setOptions(optionsString: string);

  abstract assignValue(values: object);

  abstract getREDCapFormattedValues(): object;
}



