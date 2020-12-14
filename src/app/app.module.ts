import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IvyCarouselModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
