import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {AppRoutingModule} from './app.routing';
import {FooterComponent} from './components/footer/footer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxCustomTooltipModule} from 'ngx-custom-tooltip';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IvyCarouselModule,
    NgxCustomTooltipModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule {
}
