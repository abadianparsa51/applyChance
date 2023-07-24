import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// todo refactor
const TOKEN_LOCAL_STORAGE_KEY = 'Token';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // set Authorization header if any token exists in localstorage

    // const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       'X-Shamim-Token': `${token}`,
    //     },
    //   });
    // }

    // set Accept header if it is not set before
    const accept = request.headers.get('Accept');
    if (!accept) {
      request = request.clone({
        setHeaders: {
          // Accept: `application/json`,
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // set Content-Type header if it is not set before
    const contentType = request.headers.get('Content-Type');
    if (!contentType) {
      request = request.clone({
        setHeaders: {
          'content-type': `application/json`,
        },
      });
    }
    const cors = request.headers.get('Access-Control-Allow-Origin');
    if (!cors) {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    return next.handle(request);
  }
}
