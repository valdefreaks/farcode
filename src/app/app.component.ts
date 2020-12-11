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
		{ path: '../assets/images/descarga.jpeg' },
		{ path: '../assets/images/descarga.jpeg' },
		{ path: '../assets/images/descarga.jpeg' },
		{ path: '../assets/images/descarga.jpeg' },
	]
	carouselWidth: number;
	carouselHeight: number;
	cellWidth: number;
	@HostListener('window:resize', ['$event'])
	getScreenSize($event?) {
		let carouselContainer = this.carouselContainer.nativeElement;
		this.carouselWidth = carouselContainer.offsetWidth;
		if(this.carouselWidth < 1067){
			this.carouselHeight = (this.carouselWidth / 16) * 9;
		} else{
			this.carouselHeight = 600;
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
