import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('carouselContainer', { static: false }) carouselContainer: ElementRef;

	title = 'farcode';
	navigationBackground: boolean;
	images = [
		{ path: '../assets/images/census_project.png' },
		{ path: '../assets/images/vidanta_project.png' },
		{ path: '../assets/images/lunadepapel_project.png' },
		{ path: '../assets/images/banquetes_project.png' },
	]
	carouselWidth: number;
	carouselHeight: number;
	cellWidth: number;
	@HostListener('window:resize', ['$event'])
	getScreenSize($event?) {
		let carouselContainer = this.carouselContainer.nativeElement;
		this.carouselWidth = carouselContainer.offsetWidth;
		if(this.carouselWidth < 875){
			this.carouselHeight = (this.carouselWidth / 16) * 9;
		} else{
			this.carouselHeight = 540;
		}
		
		this.cellWidth = (this.carouselHeight / 9) * 16;
		//console.log(carouselContainer.offsetWidth);
		//console.log(this.scrHeight, this.scrWidth);
	}
	constructor(private _renderer: Renderer2) {


	}
	onResize() {
		this.getScreenSize();
	}
	ngOnInit() {

	}

	doSomethingOnWindowScroll($event) {
		let scrollOffset = $event.children[0].scrollTop;
		if (scrollOffset > 500) {
			this.navigationBackground = true;
		} else {
			this.navigationBackground = false;
		}
		//console.log("window scroll: ", scrollOffset);
		//this.getScreenSize();

	}
}
