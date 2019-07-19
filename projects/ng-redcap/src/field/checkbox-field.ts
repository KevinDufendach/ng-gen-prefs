import {Field, FieldType} from './field';
import {REDCapFieldMetadata} from './redcap-field-metadata';

export class CheckboxField extends Field<object> {
  options: Map<string, string>;

  constructor(md: REDCapFieldMetadata) {
    super(md);

    this.value = {};
  }

  private static convertBoolToValue(val: boolean) {
    if (typeof val === 'undefined') {
      return '';
    }

    return (val ? '1' : '0');
  }

  assignValue(rawValues: object) {
    if (!this.fieldName) {
      console.log('unable to assign valueOf since no field name exists');
    }

    for (const key of this.options.keys()) {
      const prop = this.fieldName + '___' + key.toLowerCase();
      if (rawValues.hasOwnProperty(prop)) {
        this.value[key] = (rawValues[prop] === '1');
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

  getREDCapFormattedValues(): object {
    const values = {};

    this.options.forEach((value, key) => {
      values[this.fieldName + '___' + key.toLowerCase()] = CheckboxField.convertBoolToValue(this.value[key]);
    });

    return values;
  }

  getValueString(): string {
    return 'getValueString not implemented';
  }
}
