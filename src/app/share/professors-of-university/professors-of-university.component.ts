import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfessorsService } from './_services/professors.service';
import { ProfessorsFullDataDTO } from 'src/app/Models/Professors models/professorsFullData.DTO';
import { ApplicantFullDataDTO } from 'src/app/Models/Applicant models/applicantFullDataModel.DTO';
import { MentorsFullDataModelDTO } from 'src/app/Models/Mentors models/mentorsFullDaataModel.DTO';
import { Subscription } from 'rxjs';
import { PositionFullDataDTO } from 'src/app/Models/Position models/positionFullDataModel.DTO';

@Component({
  selector: 'professors-of-university',
  templateUrl: './professors-of-university.component.html',
  styleUrls: ['./professors-of-university.component.scss'],
})
export class ProfessorsOfUniversityComponent implements OnInit, OnDestroy {
  positionData: PositionFullDataDTO | undefined;
  applicantData: ApplicantFullDataDTO | undefined;
  mentorsData: MentorsFullDataModelDTO | undefined;
  professorData: ProfessorsFullDataDTO | undefined;
  subscribtion: Subscription[] = [];
  constructor(private _service: ProfessorsService) {}
  ngOnInit(): void {
    this.selectTab('Position');
  }
  selectTab(type: string) {
    this.subscribtion.push(
      this._service.getInfor(type).subscribe((data) => {
        if (data) {
          this.positionData = data;
        }
      })
    );
  }
  selectUser(userRole: string) {
    const userData = {
      role: userRole,
      universityId: '998',
    };
    this.subscribtion.push(
      this._service.getUser(userData).subscribe((data) => {
        if (data) {
          // checking models
          if (userRole === 'applicant') {
            this.applicantData = data;
          } else if (userRole === 'mentor') {
            this.mentorsData = data;
            this.showError(this.mentorsData);
          } else if (userRole === 'professor') {
            this.professorData = data;
            this.showError(this.mentorsData);
          }
        }
      })
    );
  }

  showError(data: MentorsFullDataModelDTO | undefined) {
    if (!data?.data.length) {
      console.log('err');
    }
  }
  ngOnDestroy(): void {
    this.subscribtion.forEach((e) => e.unsubscribe);
  }
}
