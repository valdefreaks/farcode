import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGE_OPTIONS} from './utils/common-contanst';
import {LanguageOption} from './models/lang-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  langOptions: Array<LanguageOption> = LANGUAGE_OPTIONS;
  selectedLangOption: LanguageOption = LANGUAGE_OPTIONS[0];

  constructor(private translate: TranslateService) {
    // Initialize languages
    this.translate.addLangs(this.langOptions.map((item) => item.prefix));
    translate.setDefaultLang(this.selectedLangOption.prefix);

    // Get language from localStorage or browserLang
    const localLang = localStorage.getItem('lang');
    const lang = localLang || this.translate.getBrowserLang();

    // Assign language
    this.translate.use(lang.match(/es|en/) ? lang : 'es');
    const langOption = this.langOptions.filter((item) => item.prefix === lang);
    this.selectedLangOption = langOption.length > 0 ? langOption[0] : this.selectedLangOption;
    localStorage.setItem('lang', this.selectedLangOption.prefix);
  }
}
