import {Injectable} from '@angular/core';
import {Field} from './field';
import {AngularFireFunctions} from '@angular/fire/functions';
import {REDCapFieldMetadata} from './redcap-field-metadata';
import {RadioField} from './radio-field';
import {CheckboxField} from './checkbox-field';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})
export class REDCapService {
  records: any;

  private _fieldList: BehaviorSubject<List<Field<any>>> = new BehaviorSubject(List([]));

  get fieldList() {
    return this._fieldList.asObservable();
  }

  constructor(private fns: AngularFireFunctions, private http: HttpClient) {
  }

  static getREDCapFormattedValues(fields: List<Field<any>>): object {
    const formattedValues = {};

    for (const field of fields) {
      const fieldVals = field.getREDCapFormattedValues();

      Object.keys(fieldVals).forEach((key) => {
        formattedValues[key] = fieldVals[key] || '';
      });
    }

    return formattedValues;
  }

  // static generateFieldsFromMetadataList(redCapFieldMetadata: REDCapFieldMetadata[]): Promise<Map<string, Field<any>>> {
  //   const fields = new Map<string, Field<any>>();
  //
  //   return new Promise<Map<string, Field<any>>>((resolve, reject) => {
  //     let errEncountered = false;
  //
  //     for (const rawField of redCapFieldMetadata) {
  //       REDCapService.buildFromMetadata(rawField)
  //         .then(newField => {
  //           fields.set(newField.fieldName, newField);
  //         })
  //         .catch((error) => {
  //           errEncountered = true;
  //         });
  //
  //       if (errEncountered) {
  //         break;
  //       }
  //     }
  //
  //     if (!errEncountered) {
  //       resolve(fields);
  //     } else {
  //       reject('error when trying to build field');
  //     }
  //   });
  // }

  // static buildFromMetadata(rawField: REDCapFieldMetadata): Promise<Field<any>> {
  //   const result = new Promise<Field<any>>((resolve, reject) => {
  //     switch (rawField.field_type) {
  //       case 'radio':
  //         resolve(new RadioField(rawField));
  //         break;
  //       case 'checkbox':
  //         resolve(new CheckboxField(rawField));
  //         break;
  //       default:
  //         reject('Unknown field type');
  //     }
  //   });
  //
  //   return result;
  // }

  static generateFieldFromMetadata(rawField: REDCapFieldMetadata): Field<any> {
    switch (rawField.field_type) {
      case 'radio':
        return new RadioField(rawField);
      case 'checkbox':
        return new CheckboxField(rawField);
      default:
        return null;
    }
  }

  // updateValues(): Map<string, Field<any>> {
  //   if (this.records && this.fieldMap) {
  //     this.fieldMap.forEach((field: Field<any>) => {
  //       field.assignValue(this.records);
  //     });
  //   }
  //
  //   return this.fieldMap;
  // }

  loadProjectData(form?: string) {
    this.getTestMetadata('/assets/metadata.json')
      .then(metadata => {
          const fields = (metadata as REDCapFieldMetadata[]).map((rawField: any) =>
            REDCapService.generateFieldFromMetadata(rawField)
          );

          this._fieldList.next(List(fields));


          // REDCapService.generateFieldsFromMetadataList(metadata)
          //   .then((fieldList) => {
          //     this.fieldMap = fieldList;
          //     this.fieldNames = Array.from(this.fieldMap.keys());
          //
          //     this.updateValues();
          //     // resolve(this.fieldMap);
          //   })
          //   .catch((e) => {
          //     // reject(e);
          //   });
        },
        err => console.log('Error retrieving fields')
      );
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

  // loadUserRecords(form?: string): Promise<any> {
  //   const getRecordExport = this.fns.httpsCallable('getRecord');
  //
  //   return new Promise<any>((resolve, reject) => {
  //     getRecordExport({form})
  //       .subscribe(result => {
  //           this.records = result;
  //           this.updateValues();
  //           resolve(result);
  //         },
  //         error => {
  //           // ToDo: Do not error if user does not exist (has no values)
  //           reject(error);
  //         });
  //
  //   });
  // }

  submitFields(manuallyIncludedValues?: {}): Promise<any> {
    const formattedValues = REDCapService.getREDCapFormattedValues(this._fieldList.getValue());
    if (manuallyIncludedValues) {
      Object.keys(manuallyIncludedValues).forEach(key => {
        formattedValues[key] = manuallyIncludedValues[key];
      });
    }

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

  public getField(fieldName: string): Field<any> {
    // return (this.fieldMap.get(fieldName));
    for (const field of this._fieldList.getValue()) {
      if (field.fieldName === fieldName) { return field; }
    }

    return null;
  }

  public valueOf(fieldName: string): any {
    const field = this.getField(fieldName);
    if (field) { return field.value; }

    return null;
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
