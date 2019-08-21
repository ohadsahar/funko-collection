import { MatSnackBar } from '@angular/material';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  successMessage(message: string) {
    this.snackBar.open(message, 'סגור', {
      duration: 2000,
    });
  }
  failedMessage(message: string) {
    this.snackBar.open(message, 'סגור', {
      duration: 2000,
    });
  }
}
