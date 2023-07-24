import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopLayoutComponent } from '../page-layout/desktop-layout/desktop-layout.component';
import { universityResolver } from '../Pages/university-profile/university-profile/Resolver/university.resolver';

const routes: Routes = [
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../Pages/university-profile/university-profile.module').then(
            (m) => m.UniversityProfileModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
