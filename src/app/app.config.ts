import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // https://stackoverflow.com/questions/47236963/no-provider-for-httpclient
    // https://angular.io/guide/http-setup-server-communication
    provideHttpClient()
  ]
};
