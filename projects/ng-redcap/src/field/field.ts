import {Observer} from 'rxjs';
import {REDCapFieldMetadata} from './redcap-field-metadata';

export enum FieldType {
  Radio,
  Checkbox,
  Other,
}

export abstract class Field<T> {
  fieldName: string;
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
  fieldAnnotation?: string;
  fieldType: FieldType;
  hasValue = false;

  observers = new Array<Observer<T>>();

  // constructor(
  //   public fieldName: string,
  //   public fieldLabel: string,
  //   public fieldNote: string,
  //   public branchingLogic: string,
  //   public fieldAnnotation: string,
  //   fieldType: string,
  //   choices: string
  // ) {
  //   this.fieldType = this.getType();
  //   this.setOptions(choices);
  // }

  constructor(md: REDCapFieldMetadata) {
    this.fieldName = md.field_name;
    this.fieldLabel = md.field_label;
    this.fieldNote = md.field_note;
    this.branchingLogic = md.branching_logic;
    this.fieldType = this.getType();
    this.fieldAnnotation = md.field_annotation;
    this.setOptions(md.select_choices_or_calculations);
  }

  private _value: T;

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this.hasValue = value !== undefined;
    if (this._value !== value) {
      this._value = value;
      this.onValueChange(value);
    }
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

  shouldDisplay(): boolean {
    return (this.branchingLogic !== 'FALSE');
  }

  abstract getType(): FieldType;

  abstract setOptions(optionsString: string);

  abstract assignValue(values: object);

  abstract getREDCapFormattedValues(): object;

  abstract getValueString(): string;
}



