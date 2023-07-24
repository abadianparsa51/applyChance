import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './HttpInterceptors/http-request.interceptors';
import { HttpResponseInterceptors } from './HttpInterceptors/http-response.interceptors';
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptors,
      multi: true,
    },
  ],
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
