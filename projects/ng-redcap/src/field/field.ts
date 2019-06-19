export interface REDCapFieldMetadata {
  'field_name': string;
  'form_name': string;
  'section_header': string;
  'field_type': string;
  'field_label': string;
  'select_choices_or_calculations': string;
  'field_note': string;
  'text_validation_type_or_show_slider_number': string;
  'text_validation_min': string;
  'text_validation_max': string;
  'identifier': string;
  'branching_logic': string;
  'required_field': string;
  'custom_alignment': string;
  'question_number': string;
  'matrix_group_name': string;
  'matrix_ranking': string;
  'field_annotation': string;
}

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
  textValidationTypeOrShowSliderNumber?: string;
  textValidationMin?: string;
  textValidationMax?: string;
  identifier?: string;
  branchingLogic?: string;
  requiredField?: string;
  customAlignment?: string;
  questionNumber?: string;
  matrixGroupName?: string;
  matrixRanking?: string;
  fieldAnnotation?: string;

  // options: any;
  // value: any;

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
        return new FieldCheckbox(rawField);
      default:
        return new FieldCheckbox(rawField);
    }
  }

  abstract getType(): FieldType;

  abstract setOptions(optionsString: string);

  abstract assignValue(values: object);

  abstract getValue();
}

export class RadioField extends Field {
  options: Map<string, string>;
  value: string;

  setOptions(optionsString: string) {
    this.options = new Map<string, string>();
    const ops = optionsString.split('|'); // TODO: determine what happens when there's a pipe in the string

    for (const op of ops) {
      const optionRegEx = /([\-0-9]+),\s(.*)/g; // note: need to set with each iteration
      const match = optionRegEx.exec(op);
      if (match && match.length > 2) {
        this.options.set(match[1], match[2]);
      } else {
        console.log('no match found: ' + op);
      }
    }
  }

  getOptions(): Map<string, string> {
    return this.options;
  }

  getType(): FieldType {
    return FieldType.Radio;
  }

  assignValue(values: object) {
    if (!this.fieldName) {
      console.log('unable to assign value since no field name exists');
    }

    if (values.hasOwnProperty(this.fieldName)) {
      console.log('setting value of: ' + this.fieldName + ' to ' + values[this.fieldName]);
      this.value = values[this.fieldName];
    }
  }

  getValue(): string {
    return this.value;
  }
}


export class FieldCheckbox extends Field {
  value: Array<string>;

  assignValue(values: object) {
  }

  setOptions(optionsString: string) {
  }

  getType(): FieldType {
    return FieldType.Checkbox;
  }

  getValue() {
    return this.value;
  }
}
