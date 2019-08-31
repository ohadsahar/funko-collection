import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule,
  MatInputModule, MatStepperModule, MatSnackBarModule
} from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatStepperModule, MatSnackBarModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatStepperModule, MatSnackBarModule]
})

export class AngularMaterialModule { }
