import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListComponent } from './field-list.component';
import {FieldModule} from "../../../projects/ng-redcap/src/field/field.module";

@NgModule({
  declarations: [FieldListComponent],
  exports: [
    FieldListComponent
  ],
  imports: [
    CommonModule,
    FieldModule
  ]
})
export class FieldsModule { }
