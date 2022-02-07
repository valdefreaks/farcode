import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {
  ROUTE_EMPTY,
  ROUTE_TO_HOME,
  ROUTE_TO_NOT_FOUND,
  ROUTE_TO_PRIVACY,
} from './utils/common-contanst';

const appRoutes: Routes = [
  {path: ROUTE_EMPTY, redirectTo: ROUTE_TO_HOME, pathMatch: 'full'},
  {path: ROUTE_TO_HOME, component: HomeComponent},
  {path: ROUTE_TO_PRIVACY, component: PrivacyComponent},
  {path: ROUTE_TO_NOT_FOUND, redirectTo: ROUTE_TO_HOME},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
