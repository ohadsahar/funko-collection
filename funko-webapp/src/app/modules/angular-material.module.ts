import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
  MatSlideToggleModule
} from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule]
})

export class AngularMaterialModule { }
