import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListComponent } from './field-list.component';
import {FieldModule} from "../../../projects/ng-redcap/src/field/field.module";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [FieldListComponent],
  exports: [
    FieldListComponent
  ],
  imports: [
    CommonModule,
    FieldModule,
    MatCardModule
  ]
})
export class FieldsModule { }
