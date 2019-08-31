import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
  MatSlideToggleModule, MatStepperModule, MatRadioModule, MatPaginatorModule
} from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatStepperModule, MatRadioModule, MatPaginatorModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatStepperModule, MatRadioModule, MatPaginatorModule]
})

export class AngularMaterialModule { }
