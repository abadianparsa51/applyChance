import { ChangeDetectorRef, Component } from '@angular/core';
import { RoutingService } from './Router/routing.service';
import { NavigationEnd, Router } from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ApplyChance';
  isNavigationInProgress: boolean = false;
  expand: boolean = false;
  cssClass: string = 'expanded float-btn';
  constructor(
    private routingService: RoutingService,
    private cdr: ChangeDetectorRef
  ) {
    this.routingService.isNavigationInProgress$.subscribe((value) => {
      this.isNavigationInProgress = value;
    });
    // this.cdr.detectChanges();
  }
  expanded() {
    this.expand = !this.expand;
    if (this.expand) {
      this.cssClass = 'float-btn';
    } else {
      this.cssClass = 'expanded float-btn';
    }
  }
}
