import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
  MatSlideToggleModule, MatStepperModule
} from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatStepperModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatStepperModule]
})

export class AngularMaterialModule { }
