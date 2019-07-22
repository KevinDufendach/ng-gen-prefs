import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListComponent } from './field-list.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldComponent} from './field.component';
import {RadioControlComponent} from './radio-control/radio-control.component';
import {CheckboxControlComponent} from './checkbox-control/checkbox-control.component';
import { FieldCardComponent } from './field-card/field-card.component';
import {FlexModule} from '@angular/flex-layout';
import {VisiblePipe} from './visible.pipe';

@NgModule({
  declarations: [
    FieldListComponent,
    FieldComponent,
    RadioControlComponent,
    CheckboxControlComponent,
    FieldCardComponent,
    VisiblePipe,
  ],
  exports: [
    FieldListComponent,
    FieldComponent,
    RadioControlComponent,
    CheckboxControlComponent,
    FieldCardComponent,
    VisiblePipe,
  ],
  imports: [
    CommonModule,

    MatCardModule,
    CommonModule,

    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexModule,
  ]
})
export class FieldsModule { }
