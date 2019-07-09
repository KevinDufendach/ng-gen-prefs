import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class AppMaterialImportsModule { }
