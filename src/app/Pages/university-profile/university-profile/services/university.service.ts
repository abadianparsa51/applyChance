import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityDataDTO } from 'src/app/Models/universityData.DTO';
import { UniversityFullDataDTO } from 'src/app/Models/universityFullDataModel.DTO';
import { RestAddresses } from 'src/app/core/constants/RestAddresses';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  constructor(private _httpClient: HttpClient) {}
  getUniversityDetail(id: any): Observable<UniversityFullDataDTO> {
    return this._httpClient.get<UniversityFullDataDTO>(
      RestAddresses.GET_UNIVERSITY_DETAILS + '/' + id
    );
  }
}
