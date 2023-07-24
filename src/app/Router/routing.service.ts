import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationExtras,
  NavigationStart,
  Router,
  RouterEvent,
  Event as NavigationEvent,
  Event,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { HeaderService } from '../layout/header/header.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  isNavigationInProgress = new BehaviorSubject(false);
  isNavigationInProgress$ = this.isNavigationInProgress.asObservable();
  private routeHistory: string[] = [];
  private routeHistorySize = 10;
  private addToHistory = true;
  private lastSuccessfulRouteUrl = '';
  private previousUrl = '';

  // , private headerService: HeaderService
  constructor(private router: Router) {
    this.lastSuccessfulRouteUrl = this.router.url;
    router.events.subscribe((event: NavigationEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: NavigationEvent): void {
    if (event instanceof NavigationStart) {
      // this.headerService.closeMenu();
      this.isNavigationInProgress.next(true);
    }
    if (event instanceof NavigationEnd) {
      this.previousUrl = this.lastSuccessfulRouteUrl;
      if (this.addToHistory) {
        this.pushToHistory(this.lastSuccessfulRouteUrl);
      }
      this.addToHistory = true;
      this.lastSuccessfulRouteUrl = event.url;
      this.isNavigationInProgress.next(false);
    }

    // Set isNavigationInProgress state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isNavigationInProgress.next(false);
    }
    if (event instanceof NavigationError) {
      this.isNavigationInProgress.next(false);
    }
  }

  getLastSuccessfulRouteUrl(): string {
    return this.lastSuccessfulRouteUrl;
  }

  setLastSuccessfulRouteUrl(url: string) {
    this.lastSuccessfulRouteUrl = url;
  }

  getPreviousUrl(): string {
    return this.routeHistory[this.routeHistory.length - 1];
  }

  navigateBack() {
    const backUrl = this.routeHistory.pop();
    console.log(backUrl);

    this.addToHistory = false;
    this.router.navigateByUrl(`backUrl`);
  }

  navigateBackWithExtra(extra: NavigationExtras) {
    const backUrl = this.routeHistory.pop();
    this.addToHistory = false;
    this.router.navigate([backUrl], extra);
  }

  private pushToHistory(route: string) {
    if (this.routeHistory.length >= this.routeHistorySize) {
      this.routeHistory.shift();
    }
    this.routeHistory.push(route);
  }
}
