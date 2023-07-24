import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UniversityService } from '../services/university.service';
import { Injectable } from '@angular/core';
import { UniversityFullDataDTO } from 'src/app/Models/universityFullDataModel.DTO';
@Injectable({
  providedIn: 'root',
})
export class universityResolver implements Resolve<any> {
  constructor(private _service: UniversityService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<any>
    | Observable<Observable<UniversityFullDataDTO>>
    | Promise<Observable<UniversityFullDataDTO>> {
    return this._service.getUniversityDetail('998');
  }
}
