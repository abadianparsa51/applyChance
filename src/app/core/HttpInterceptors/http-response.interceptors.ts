import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, finalize, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpResponseInterceptors implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: event.body.result });
        }
        return event;
      }),
      catchError((response: HttpErrorResponse) => {
        let errorMessage = '';
        if (response.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${response.error.message}`;
        } else if (response.error && response.error.length > 0) {
          errorMessage = response.error;
        } else {
          // server-side error
          errorMessage = response.error.error.errorMessage;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
