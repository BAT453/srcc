import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const secureReq = req.clone({
      url: req.url.replace('http://', 'http://')
      
    });

    return next.handle(secureReq);
  }
}
