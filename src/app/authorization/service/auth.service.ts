import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthenticationModel } from 'src/app/Models/Auth models/AuthenticationModel.DTO';
import { RestAddresses } from 'src/app/core/constants/RestAddresses';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLogedIn = new BehaviorSubject<boolean>(false);
  constructor(private _httpClient: HttpClient) {
    this.checkLogin();
  }
  loginService(data: any): Observable<AuthenticationModel> {
    return this._httpClient.post<AuthenticationModel>(
      RestAddresses.LOGIN,
      data
    );
  }
  storageAuthenticationData(data: AuthenticationModel) {
    const authData = JSON.stringify(data);
    localStorage.setItem('Auth', authData);
    this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    const data = localStorage.getItem('Auth');
    let userActive: boolean = false;
    userActive = data ? true : false;
    this.userLogedIn.next(userActive);
    return this.userLogedIn.asObservable();
  }
}
