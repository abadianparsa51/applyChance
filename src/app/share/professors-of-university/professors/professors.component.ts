import { Component, Input } from '@angular/core';
import { ProfessorsService } from '../_services/professors.service';
import { ProfessorsFullDataDTO } from 'src/app/Models/Professors models/professorsFullData.DTO';

@Component({
  selector: 'professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss'],
})
export class ProfessorsComponent {
  @Input() professors: ProfessorsFullDataDTO | undefined;
  constructor(private _service: ProfessorsService) {}
}
