import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBoxingComponent } from './show-boxing/show-boxing.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FindInLocationComponent } from './find-in-location/find-in-location.component';
import { ProfessorsOfUniversityComponent } from './professors-of-university/professors-of-university.component';
import { PositionsComponent } from './professors-of-university/positions/positions.component';
import { RequirementsComponent } from './professors-of-university/requirements/requirements.component';
import { ProfessorsComponent } from './professors-of-university/professors/professors.component';
import { MentorsComponent } from './professors-of-university/mentors/mentors.component';
import { StudentsComponent } from './professors-of-university/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';
import { RequirementsDialogComponent } from './professors-of-university/requirements-dialog/requirements-dialog.component';

@NgModule({
  declarations: [
    ShowBoxingComponent,
    FindInLocationComponent,
    ProfessorsOfUniversityComponent,
    PositionsComponent,
    RequirementsComponent,
    ProfessorsComponent,
    MentorsComponent,
    StudentsComponent,
    InformationComponent,
    RequirementsDialogComponent,
    RequirementsDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    MaterialModule,
    ShowBoxingComponent,
    FindInLocationComponent,
    InformationComponent,
    ProfessorsOfUniversityComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ShareModule { }
