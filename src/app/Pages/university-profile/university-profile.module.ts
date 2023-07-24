import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { universityResolver } from './university-profile/Resolver/university.resolver';

const routes: Routes = [
  {
    path: '',
    component: UniversityProfileComponent,
    resolve: { university: universityResolver },
  },
];

@NgModule({
  declarations: [UniversityProfileComponent],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
})
export class UniversityProfileModule {}
