import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import {/*fade, fadeRightNav, fadeRight2, fadeRight, fadeTop, fadeLeft, fadeLeft2, showHideLeft*/ animations } from './animations';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		/*fadeTop, fadeRight, fadeRightNav, fade, fadeRight2, fadeLeft, fadeLeft2, showHideLeft*/
		animations
	]
})

export class AppComponent {
	@ViewChild('carouselContainer', { static: false }) carouselContainer: ElementRef;
	@ViewChild('firstContainer', { static: false }) firstContainer: ElementRef;
	@HostListener('window:resize', ['$event'])
	title = 'farcode';
	navigationBackground: boolean;
	/*images = [
		{ path: '../assets/images/census_project.png' },
		{ path: '../assets/images/vidanta_project.png' },
		{ path: '../assets/images/lunadepapel_project.png' },
		{ path: '../assets/images/banquetes_project.png' },
	]*/
	carouselWidth: number;
	carouselHeight: number;
	cellWidth: number;

	animateAboutMe: boolean;
	animatePortfolio: boolean;
	mobileDevice: boolean;

	constructor(private _renderer: Renderer2) {


	}
	onResize() {
		this.getScreenSize();
	}
	ngOnInit() {
		this.animationsMediaQuery();
	}
	getScreenSize($event?) {
		this.adjustCarousel();
		this.animationsMediaQuery();
		//console.log(this.scrHeight, this.scrWidth);
	}
	adjustCarousel() {
		let carouselContainer = this.carouselContainer.nativeElement;
		this.carouselWidth = carouselContainer.offsetWidth;
		if (this.carouselWidth < 875) {
			this.carouselHeight = (this.carouselWidth / 16) * 9;
		} else {
			this.carouselHeight = 540;
		}

		this.cellWidth = (this.carouselHeight / 9) * 16;
		console.log(carouselContainer.offsetWidth);
	}
	animationsMediaQuery() {
		let firstContainerWidth = this.firstContainer.nativeElement.offsetWidth;
		if (firstContainerWidth > 767) {
			this.mobileDevice = false;
		} else {
			this.mobileDevice = true;
		}
	}
	doSomethingOnWindowScroll($event) {
		let scrollOffset = $event.children[0].scrollTop;
		if (scrollOffset > 842) {
			this.navigationBackground = true;
		} else {
			this.navigationBackground = false;
		}

		if (scrollOffset > 265 && scrollOffset < 1375) {
			if (!this.animateAboutMe)
				this.animateAboutMe = true;
		} else {
			if (this.animateAboutMe)
				this.animateAboutMe = false;
		}
		if (scrollOffset > 1007 && scrollOffset < 1855) {
			if (!this.animatePortfolio)
				this.animatePortfolio = true;
		} else {
			if (this.animatePortfolio)
				this.animatePortfolio = false;
		}
		console.log("window scroll: ", scrollOffset);
		//this.getScreenSize();

	}
}
