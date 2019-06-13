import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpClientModule } from '@angular/common/http';

export function authHttpServiceFactory(private http: HttpClient, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

/**
 * Configuracion basica del modulo angular2-jwt
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [HttpClientModule, RequestOptions]
    }
  ]
})
export class JwtModule { }




