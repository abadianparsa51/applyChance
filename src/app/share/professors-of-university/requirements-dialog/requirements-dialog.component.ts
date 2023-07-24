import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-requirements-dialog',
  templateUrl: './requirements-dialog.component.html',
  styleUrls: ['./requirements-dialog.component.scss'],
})
export class RequirementsDialogComponent {
  constructor(private _dialog: MatDialog) {}
  closeDialog() {
    debugger;
    this._dialog.closeAll();
  }
}
