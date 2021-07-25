import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { animations, fadeRightNav } from '../../animations/animations';
import { RESPONSIVE_MD, RESPONSIVE_SM } from '../../utils/common-contanst';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animations, fadeRightNav],
})
export class HomeComponent
  implements OnInit, AfterContentChecked, AfterViewInit
{
  @ViewChild('carouselContainer', { static: false })
  carouselContainer: ElementRef;
  @ViewChild('firstContainer', { static: false }) firstContainer: ElementRef;
  @ViewChild('headerSection', { static: false }) headerSection: ElementRef;
  navigationBackground: boolean;
  carouselWidth: number;
  carouselHeight: number;
  cellWidth: number;
  animateAboutMe: boolean;
  animatePortfolio: boolean;
  mobileDevice: boolean;
  heroImg: string = 'assets/images/hero_background_small.jpg';

  constructor(private _renderer: Renderer2, private cdr: ChangeDetectorRef) {}
  @HostListener('window:resize')
  onResize() {
    this.adjustCarousel();
    this.animationsMediaQuery();
    this.changeHeroImage(window.innerWidth);
  }
  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowScroll($event) {
    this.animationsMediaQuery();
    const scrollOffset = $event.target.children[0].scrollTop;
    const headerSectionHeight = this.headerSection.nativeElement.offsetHeight; //this._renderer.selectRootElement(this.firstContainer.nativeElement).offsetWidth;
    this.navigationBackground = scrollOffset > headerSectionHeight - 110;

    if (scrollOffset > 265 && scrollOffset < 1375) {
      if (!this.animateAboutMe) this.animateAboutMe = true;
    }
    if (scrollOffset > 1007 && scrollOffset < 1855) {
      if (!this.animatePortfolio) this.animatePortfolio = true;
    }
  }
  ngOnInit() {
    this.navigationBackground = false;
  }
  ngAfterViewInit() {
    this.onResize();
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
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
    let firstContainerWidth = this.firstContainer.nativeElement.offsetWidth; //this._renderer.selectRootElement(this.firstContainer.nativeElement).offsetWidth;
    this.mobileDevice = firstContainerWidth <= 767;
  }
  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  changeHeroImage(width: number) {
    switch (true) {
      case width < RESPONSIVE_SM:
        this.heroImg = 'assets/images/hero_background_small.jpg';
        break;
      case width >= RESPONSIVE_SM && width < RESPONSIVE_MD:
        this.heroImg = 'assets/images/hero_background_medium.jpg';
        break;
      default:
        this.heroImg = 'assets/images/hero_background.jpg';
        break;
    }
  }
}
