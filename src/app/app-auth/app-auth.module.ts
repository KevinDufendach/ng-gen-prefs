import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppMaterialImportsModule} from '../app-material-imports/app-material-imports.module';

@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialImportsModule,
  ]
})
export class AppAuthModule { }
