import { OnInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/authorization/service/auth.service';

@Component({
  selector: 'find-in-location',
  templateUrl: './find-in-location.component.html',
  styleUrls: ['./find-in-location.component.scss'],
})
export class FindInLocationComponent implements OnDestroy {
  hide: boolean = false;
  subscribtion: Subscription[] = [];

  constructor(
    private _service: AuthService,
    private _router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.subscribtion.push(
      this._service.userLogedIn.subscribe((r) => {
        if (r) {
          this.hide = r;
        }
      })
    );
  }
  goToLogin() {
    this._router.navigateByUrl('/login');
  }
  ngOnDestroy() {
    this.subscribtion.forEach((e) => e.unsubscribe);
  }
}
