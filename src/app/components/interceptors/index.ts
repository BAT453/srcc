import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GeneralInterceptor } from './general-interceptor';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: GeneralInterceptor, multi: true },
];
