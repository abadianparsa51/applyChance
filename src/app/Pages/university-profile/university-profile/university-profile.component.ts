import { ChangeDetectorRef, Component } from '@angular/core';
import { UniversityService } from './services/university.service';
import { UniversityDataDTO } from 'src/app/Models/universityData.DTO';
import { Subscription } from 'rxjs';
import { RoutingService } from 'src/app/Router/routing.service';
import { ActivatedRoute } from '@angular/router';
import { UniversityFullDataDTO } from 'src/app/Models/universityFullDataModel.DTO';

@Component({
  selector: 'app-university-profile',
  templateUrl: './university-profile.component.html',
  styleUrls: ['./university-profile.component.scss'],
})
export class UniversityProfileComponent {
  universityFullData: UniversityFullDataDTO | undefined;
  universityData: UniversityDataDTO | undefined;
  subscription: Subscription[] = [];
  isNavigationInProgress: boolean | undefined;
  constructor(
    private _service: UniversityService,
    private _routingService: RoutingService,
    private _router: ActivatedRoute
  ) {
    this._routingService.isNavigationInProgress$.subscribe((value) => {
      this.isNavigationInProgress = value;
    });
    this._router.data.subscribe((data) => {
      if (data) {
        this.universityFullData = data['university'];
        this.universityData = this.universityFullData?.data;
      }
    });
  }
  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.forEach((e) => e.unsubscribe);
  }
}
