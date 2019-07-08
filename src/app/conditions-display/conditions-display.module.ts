import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsDisplayComponent } from './conditions-display.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {OrganIconComponent} from '../organ-icon/organ-icon.component';

@NgModule({
  declarations: [ConditionsDisplayComponent, OrganIconComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexModule
  ],
  exports: [
    OrganIconComponent
  ]
})
export class ConditionsDisplayModule { }
