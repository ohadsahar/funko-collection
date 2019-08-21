import { NgModule } from '@angular/core';
import { MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
@NgModule({
  imports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule],
  exports: [MatDividerModule, MatDialogModule, MatInputModule, MatButtonModule, MatCardModule]
})

export class AngularMaterialModule { }
