import {Field, FieldType} from './field';

export class RadioField extends Field<string> {
  options: Map<string, string>;

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

  getREDCapFormattedValues(): object {
    const value = {};

    value[this.fieldName] = this.value;

    return value;
  }
}
