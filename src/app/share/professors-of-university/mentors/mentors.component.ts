import { Component, Input } from '@angular/core';
import { MentorsFullDataModelDTO } from 'src/app/Models/Mentors models/mentorsFullDaataModel.DTO';

@Component({
  selector: 'mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss'],
})
export class MentorsComponent {
  @Input() mentors: MentorsFullDataModelDTO | undefined;
}
