import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
  MatSlideToggleModule, MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatRadioModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule,
    MatSlideToggleModule, MatRadioModule]
})

export class UserSectionAngularMaterialModule {}
