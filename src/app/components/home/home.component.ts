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
import {LANGUAGE_OPTIONS, RESPONSIVE_MD, RESPONSIVE_SM} from '../../utils/common-contanst';
import {TranslateService} from '@ngx-translate/core';
import {LanguageOption} from '../../models/lang-option';

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
  navigationBackground = false;
  langOptions: Array<LanguageOption> = LANGUAGE_OPTIONS;
  selectedLangOption: LanguageOption = null;
  popIsOpen = false;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef, private translate: TranslateService) {
    const localLang = localStorage.getItem('lang');
    const langOption = this.langOptions.filter((item) => item.prefix === localLang);
    if (langOption.length > 0) {
      this.selectedLangOption = langOption[0];
    } else {
      this.selectedLangOption = LANGUAGE_OPTIONS[0];
      localStorage.setItem('lang', this.selectedLangOption.prefix);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustCarousel();
    this.changeHeroImage(window.innerWidth);
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowScroll($event): void {
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

  selectLanguage(langId: number): void {
    const langOption = this.langOptions.filter((item) => item.id === langId);
    let lang;
    if (langOption.length > 0) {
      this.selectedLangOption = langOption[0];
      lang = langOption[0].prefix;
    } else {
      this.selectedLangOption = LANGUAGE_OPTIONS[0];
      lang = 'es';
    }
    localStorage.setItem('lang', lang);
    this.popIsOpen = false;
    this.translate.use(lang.match(/es|en/) ? lang : 'es');
  }
}
