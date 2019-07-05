import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConditionsDisplayComponent} from './conditions-display/conditions-display.component';

const routes: Routes = [
  {
    path: '',
    component: ConditionsDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
