import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsDisplayComponent } from './conditions-display.component';
import {MatButtonModule, MatExpansionModule} from "@angular/material";

@NgModule({
  declarations: [ConditionsDisplayComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class ConditionsDisplayModule { }
