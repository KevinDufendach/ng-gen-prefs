import {Injectable} from '@angular/core';
import {Field} from './field';
import {AngularFireFunctions} from '@angular/fire/functions';
import {REDCapFieldMetadata} from './redcap-field-metadata';
import {RadioField} from './radio-field';
import {CheckboxField} from './checkbox-field';
import {HttpClient} from '@angular/common/http';

export const TESTING = true;

export enum State {
  UNINITIATED,
  LOADING,
  READY
}

@Injectable({
  providedIn: 'root'
})
export class REDCapService {
  fieldMap = new Map<string, Field>();
  fieldState: State;
  records: any;
  recordState: State;

  constructor(private fns: AngularFireFunctions, private http: HttpClient) {
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
            errEncountered = true;
          });

        if (errEncountered) {
          break;
        }
      }

      if (!errEncountered) {
        resolve(fields);
      } else {
        reject('error when trying to build field');
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
    if (this.records && this.fieldMap) {
      this.fieldMap.forEach((field: Field) => {
        field.assignValue(this.records);
      });
    }

    return this.fieldMap;
  }

  loadProjectData(form?: string): Promise<Map<string, Field>> {
    return new Promise<Map<string, Field>>((resolve, reject) => {
      this.getTestMetadata('/assets/metadata.json')
        .then(metadata => {
          REDCapService.generateFieldsFromMetadataList(metadata)
            .then((fieldList) => {
              this.fieldMap = fieldList;

              this.updateValues();
              resolve(this.fieldMap);
            })
            .catch((e) => {
              reject(e);
            });
        })
        .catch((e) => {
            reject(e);
          }
        );
    });

    // return new Promise<Map<string, Field>>((resolve, reject) => {
    //       const getMetadata = this.fns.httpsCallable('getMetadata');
    //
    //       getMetadata({form})
    //         .subscribe(metadata => {
    //             REDCapService.generateFieldsFromMetadataList(metadata)
    //               .then((fieldList) => {
    //                 this.fieldMap = fieldList;
    //
    //                 this.updateValues();
    //                 resolve(this.fieldMap);
    //               })
    //               .catch((e) => {
    //                 reject(e);
    //               });
    //           },
    //           error => {
    //             reject(error);
    //           });
    //
    //     });

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
    const formattedValues = REDCapService.getREDCapFormattedValues(Array.from(this.fieldMap.values()));

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

  public getField(fieldName: string): Field {
    return (this.fieldMap.get(fieldName));
  }

  public value(fieldName: string): any {
    if (this.fieldMap.has(fieldName)) {
      return this.fieldMap.get(fieldName).getValue();
    }

    return -1;
  }

  getTestMetadata(uri: string): Promise<REDCapFieldMetadata[]> {
    return new Promise<REDCapFieldMetadata[]>((resolve, reject) => {
      this.http.get<REDCapFieldMetadata[]>(uri)
        .subscribe((result) => {
          // ToDo: check to be sure data received are appropriately formatted
          const resultData = result as REDCapFieldMetadata[];
          resolve(resultData);
        }, (error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}
