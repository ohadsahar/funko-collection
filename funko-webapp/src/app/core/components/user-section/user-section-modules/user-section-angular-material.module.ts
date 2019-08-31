import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
  MatSlideToggleModule, MatRadioModule, MatOptionModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatRadioModule, MatOptionModule, MatSelectModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatRadioModule, MatOptionModule, MatSelectModule]
})

export class UserSectionAngularMaterialModule { }
