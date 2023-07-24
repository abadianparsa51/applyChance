import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DesktopLayoutComponent } from './desktop-layout/desktop-layout.component';
import { ShareModule } from '../share/share.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    HeaderComponent,
    DesktopLayoutComponent,
    MainNavComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ShareModule],
  // entryComponents: [DesktopLayoutComponent],
})
export class PageLayoutModule {}
