import {Injectable} from '@angular/core';
import {Field} from './field';
import {AngularFireFunctions} from '@angular/fire/functions';
import {REDCapFieldMetadata} from './redcap-field-metadata';
import {RadioField} from './radio-field';
import {CheckboxField} from './checkbox-field';

export enum State {
  UNINITIATED,
  LOADING,
  READY
}

@Injectable({
  providedIn: 'root'
})
export class REDCapService {
  fields: Map<string, Field>;
  fieldState: State;
  records: any;
  recordState: State;

  constructor(private fns: AngularFireFunctions) {
  }

  static getREDCapFormattedValues(fields: Field[]): object {
    const formattedValues = {};

    for (const field of fields) {
      const fieldVals = field.getREDCapFormattedValues();

      Object.keys(fieldVals).forEach((key) => {
        formattedValues[key] = fieldVals[key] || '';
      });
    }

    return formattedValues;
  }

  static generateFieldsFromMetadataList(redCapFieldMetadata: REDCapFieldMetadata[]): Promise<Map<string, Field>> {
    const fields = new Map<string, Field>();

    return new Promise<Map<string, Field>>((resolve, reject) => {
      let errEncountered = false;

      for (const rawField of redCapFieldMetadata) {
        REDCapService.buildFromMetadata(rawField)
          .then(newField => {
            fields.set(newField.fieldName, newField);
          })
          .catch((error) => {
            reject('error when trying to build field');
            errEncountered = true;
          });

        if (errEncountered) {
          break;
        }
      }

      if (!errEncountered) {
        resolve(fields);
      }
    });
  }

  static buildFromMetadata(rawField: REDCapFieldMetadata): Promise<Field> {
    const result = new Promise<Field>((resolve, reject) => {
      switch (rawField.field_type) {
        case 'radio':
          resolve(new RadioField(rawField));
          break;
        case 'checkbox':
          resolve(new CheckboxField(rawField));
          break;
        default:
          reject('Unknown field type');
      }

    });

    return result;
  }

  updateValues(): Map<string, Field> {
    if (this.records && this.fields) {
      this.fields.forEach((field: Field) => {
        field.assignValue(this.records);
      });
    }

    return this.fields;
  }

  loadProjectData(form?: string): Promise<Map<string, Field>> {
    const getMetadata = this.fns.httpsCallable('getMetadata');

    return new Promise<Map<string, Field>>((resolve, reject) => {
      getMetadata({form})
        .subscribe(metadata => {
            REDCapService.generateFieldsFromMetadataList(metadata)
              .then((fieldList) => {
                this.fields = fieldList;

                this.updateValues();
                resolve(this.fields);
              })
              .catch((e) => {
                reject(e);
              });
          },
          error => {
            reject(error);
          });

    });

  }

  loadUserRecords(form?: string): Promise<any> {
    const getRecordExport = this.fns.httpsCallable('getRecord');

    return new Promise<any>((resolve, reject) => {
      getRecordExport({form})
        .subscribe(result => {
            this.records = result;
            this.updateValues();
            resolve(result);
          },
          error => {
            // ToDo: Do not error if user does not exist (has no values)
            reject(error);
          });

    });
  }

  submitFields(): Promise<any> {
    const formattedValues = REDCapService.getREDCapFormattedValues(Array.from(this.fields.values()));

    return new Promise<any>((resolve, reject) => {
      const submitFieldsFn = this.fns.httpsCallable('submitFields');

      submitFieldsFn({
        records: formattedValues
      })
        .subscribe(result => {
            resolve(result);
          },
          error => {
            console.log(error);
            reject(error);
          });
    });
  }

  getField(fieldName: string): Field {
    if (this.fields.has(fieldName)) {
      return this.fields.get(fieldName);
    }

    return null;
  }
}
