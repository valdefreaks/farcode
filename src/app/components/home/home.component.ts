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
import {animations, fadeRightNav} from '../../animations/animations';
import {RESPONSIVE_MD, RESPONSIVE_SM} from '../../utils/common-contanst';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animations, fadeRightNav],
})
export class HomeComponent
  implements OnInit, AfterContentChecked, AfterViewInit {
  @ViewChild('carouselContainer', {static: false})
  carouselContainer: ElementRef;
  @ViewChild('firstContainer', {static: false}) firstContainer: ElementRef;
  @ViewChild('headerSection', {static: false}) headerSection: ElementRef;
  animateAboutMe: boolean;
  animatePortfolio: boolean;
  carouselWidth: number;
  carouselHeight: number;
  cellWidth: number;
  heroImg = 'assets/images/hero_background_small.jpg';
  mobileDevice: boolean;
  navigationBackground = false;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustCarousel();
    this.animationsMediaQuery();
    this.changeHeroImage(window.innerWidth);
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowScroll($event): void {
    this.animationsMediaQuery();
    const scrollOffset = $event.target.children[0].scrollTop;
    const headerSectionHeight = this.headerSection.nativeElement.offsetHeight;
    this.navigationBackground = scrollOffset > headerSectionHeight - 110;

    if (scrollOffset > 265 && scrollOffset < 1375) {
      this.animateAboutMe ??= true;
    }
    if (scrollOffset > 1007 && scrollOffset < 1855) {
      this.animatePortfolio ??= true;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  adjustCarousel(): void {
    const carouselContainer = this.carouselContainer.nativeElement;
    this.carouselWidth = carouselContainer.offsetWidth;
    if (this.carouselWidth < 875) {
      this.carouselHeight = (this.carouselWidth / 16) * 9;
    } else {
      this.carouselHeight = 540;
    }
    this.cellWidth = (this.carouselHeight / 9) * 16;
  }

  animationsMediaQuery(): void {
    const firstContainerWidth = this.firstContainer.nativeElement.offsetWidth;
    this.mobileDevice = firstContainerWidth <= 767;
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  changeHeroImage(width: number): void {
    const heroImages = {
      small: 'assets/images/hero_background_small.jpg',
      medium: 'assets/images/hero_background_medium.jpg',
      large: 'assets/images/hero_background.jpg',
    };
    const windowSize = width < RESPONSIVE_SM
      ? 'small'
      : width >= RESPONSIVE_SM && width < RESPONSIVE_MD
      ? 'medium'
      : 'large';
    this.heroImg = heroImages[windowSize];
  }
}
