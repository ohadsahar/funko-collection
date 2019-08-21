import { NgModule } from '@angular/core';
import { MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule]
})

export class AngularMaterialModule { }
