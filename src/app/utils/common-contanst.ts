// Routes
import {LanguageOption} from '../models/lang-option';

export const ROUTE_TO_NOT_FOUND = '**';
export const ROUTE_EMPTY = '';
export const ROUTE_TO_HOME = 'home';
export const ROUTE_TO_PRIVACY = 'privacy';

// Responsive breakpoints
export const RESPONSIVE_XS = 480;
export const RESPONSIVE_SM = 768;
export const RESPONSIVE_MD = 992;
export const RESPONSIVE_LG = 1200;
export const RESPONSIVE_XL = 1700;

// Languages
export const LANGUAGE_OPTIONS: Array<LanguageOption> = [
  {
    id: 1,
    prefix: 'es',
    label: 'Español',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg'
  },
  {
    id: 2,
    prefix: 'en',
    label: 'English',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg'
  },
];
