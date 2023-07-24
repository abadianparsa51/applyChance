import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PositionFullDataDTO } from 'src/app/Models/Position models/positionFullDataModel.DTO';
import { ProfessorsFullDataDTO } from 'src/app/Models/Professors models/professorsFullData.DTO';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
})
export class PositionsComponent {
  @Input() position: PositionFullDataDTO | undefined;

  constructor() {
    setTimeout(() => {
      console.log(this.position);
    }, 500);
  }
}
