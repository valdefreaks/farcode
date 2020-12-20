import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import {routing, appRoutingProviders} from './app.routing';
@NgModule({
	declarations: [
		AppComponent,
		PrivacyComponent,
		HomeComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		IvyCarouselModule,
		BrowserAnimationsModule, 
		routing
	],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
