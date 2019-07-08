import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsDisplayComponent } from './conditions-display.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [ConditionsDisplayComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexModule
  ]
})
export class ConditionsDisplayModule { }
