import { Component, Input, AfterViewInit } from '@angular/core';
import { UniversityDataDTO } from 'src/app/Models/universityData.DTO';
import { UniversityFullDataDTO } from 'src/app/Models/universityFullDataModel.DTO';

@Component({
  selector: 'show-boxing',
  templateUrl: './show-boxing.component.html',
  styleUrls: ['./show-boxing.component.scss'],
})
export class ShowBoxingComponent implements AfterViewInit {
  @Input() universityData: UniversityDataDTO | undefined;
  ngAfterViewInit(): void {
    if (this.universityData) {
      console.log(this.universityData?.cover);
    }
  }
}
