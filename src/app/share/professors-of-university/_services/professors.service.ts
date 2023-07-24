import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAddresses } from 'src/app/core/constants/RestAddresses';

@Injectable({
  providedIn: 'root',
})
export class ProfessorsService {
  constructor(private _httpClient: HttpClient) {}
  getInfor(type: string): Observable<any> {
    return this._httpClient.get<any>(
      RestAddresses.UNIVERSITY + '/' + type + '/998'
    );
  }
  getUser(data: any): Observable<any> {
    return this._httpClient.post<any>(RestAddresses.GET_USER, data);
  }
}
