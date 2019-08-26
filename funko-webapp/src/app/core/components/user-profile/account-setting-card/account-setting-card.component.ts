import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShutdownAccountDialogComponent } from 'src/app/shared/dialogs/shutdown-account-dialog/shutdown-account-dialog.component';
import { FreezeAccountDialogComponent } from '../../../../shared/dialogs/freeze-account-dialog/freeze-account-dialog.component';

@Component({
  selector: 'app-account-setting-card',
  templateUrl: './account-setting-card.component.html',
  styleUrls: ['../user-profile.component.scss']
})
export class AccountSettingCardComponent {
  freezeAccount: boolean;
  shutdownAccount: boolean;
  constructor(private dialog: MatDialog) { }

  freezeAccountDialog() {
    const dialog = this.dialog.open(FreezeAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.freezeAccount = false;
      }
    });
  }
  shutDownAccountDialog() {
    const dialog = this.dialog.open(ShutdownAccountDialogComponent);
    dialog.afterClosed().subscribe(response => {
      if (response === undefined || response === false) {
        this.shutdownAccount = true;
      }
    });
  }
}
