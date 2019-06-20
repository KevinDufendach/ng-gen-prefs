import {REDCapFieldMetadata} from './redcap-field-metadata';

export enum FieldType {
  Radio,
  Checkbox,
  Other,
}

export abstract class Field {
  fieldName: string;
  fieldType: FieldType;
  fieldLabel: string;
  fieldNote: string;
  // textValidationTypeOrShowSliderNumber?: string;
  // textValidationMin?: string;
  // textValidationMax?: string;
  // identifier?: string;
  // branchingLogic?: string;
  // requiredField?: string;
  // customAlignment?: string;
  // questionNumber?: string;
  // matrixGroupName?: string;
  // matrixRanking?: string;
  // fieldAnnotation?: string;

  constructor(md: REDCapFieldMetadata) {
    this.fieldName = md.field_name;
    this.fieldLabel = md.field_label;
    this.fieldNote = md.field_note;
    this.fieldType = this.getType();
    this.setOptions(md.select_choices_or_calculations);
  }

  static generateFieldsFromMetadataList(redCapFieldMetadata: REDCapFieldMetadata[]): Field[] {
    const fields = new Array<Field>();

    for (const rawField of redCapFieldMetadata) {
      fields.push(this.buildFromMetadata(rawField));
    }

    return fields;
  }

  static buildFromMetadata(rawField: REDCapFieldMetadata): Field {
    switch (rawField.field_type) {
      case 'radio':
        return new RadioField(rawField);
      case 'checkbox':
        return new CheckboxField(rawField);
      default:
        return new CheckboxField(rawField);
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

  abstract getType(): FieldType;

  abstract setOptions(optionsString: string);

  abstract assignValue(values: object);

  abstract getValue();

  abstract getREDCapFormattedValueMap(): Map<string, string>;
}

export class RadioField extends Field {
  options: Map<string, string>;
  value: string;

  setOptions(optionsString: string) {
    this.options = Field.getOptionMapFromString(optionsString);
  }

  getOptions(): Map<string, string> {
    return this.options;
  }

  getType(): FieldType {
    return FieldType.Radio;
  }

  assignValue(rawValues: object) {
    if (!this.fieldName) {
      console.log('unable to assign value since no field name exists');
    }

    if (rawValues.hasOwnProperty(this.fieldName)) {
      this.value = rawValues[this.fieldName];
    }
  }

  getValue(): string {
    return this.value;
  }

  getREDCapFormattedValueMap(): Map<string, string> {
    const valueMap = new Map<string, string>();

    valueMap.set(this.fieldName, this.getValue());

    return valueMap;
  }
}

export class CheckboxField extends Field {
  options: Map<string, string>;
  values = {};

  assignValue(rawValues: object) {
    if (!this.fieldName) {
      console.log('unable to assign value since no field name exists');
    }

    for (const key of this.options.keys()) {
      const prop = this.fieldName + '___' + key.toLowerCase();
      if (rawValues.hasOwnProperty(prop)) {
        this.values[key] = (rawValues[prop] === '1');
      }
    }
  }

  setOptions(optionsString: string) {
    this.options = Field.getOptionMapFromString(optionsString);
  }

  getOptions(): Map<string, string> {
    return this.options;
  }

  getType(): FieldType {
    return FieldType.Checkbox;
  }

  getValue() {
    return this.values;
  }

  getREDCapFormattedValueMap(): Map<string, string> {
    const valueMap = new Map<string, string>();

    this.options.forEach((value, key) => {
      valueMap.set(this.fieldName + '___' + key, value);
    });

    return valueMap;
  }
}
