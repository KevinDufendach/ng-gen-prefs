import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListComponent } from './field-list.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FieldComponent} from './field.component';
import {RadioControlComponent} from './radio-control/radio-control.component';
import {CheckboxControlComponent} from './checkbox-control/checkbox-control.component';

@NgModule({
  declarations: [
    FieldListComponent,
    FieldComponent,
    RadioControlComponent,
    CheckboxControlComponent,
  ],
  exports: [
    FieldListComponent,
    FieldComponent,
    RadioControlComponent,
    CheckboxControlComponent,
  ],
  imports: [
    CommonModule,

    MatCardModule,
    CommonModule,

    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class FieldsModule { }
