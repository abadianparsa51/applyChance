import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequirementsDialogComponent } from '../requirements-dialog/requirements-dialog.component';

@Component({
  selector: 'requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent {
  @Input() data: any;
  constructor(private _dialog: MatDialog) {}
  openDialog() {
    this._dialog.open(RequirementsDialogComponent);
  }
}
