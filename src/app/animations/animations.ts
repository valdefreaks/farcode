import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let fadeRightNav = trigger('fadeRightNav', [
  state('void', style({opacity: 0, paddingRight: '0'})),
  transition(':enter', [animate('500ms 4300ms')]),
]);
export const animations = [
  trigger('fadeTop', [
    state('void', style({marginTop: '-3.5rem', opacity: 0})),
    transition(':enter', [animate('1000ms 700ms')]),
  ]),
  trigger('fadeSlow', [
    state('void', style({opacity: 0})),
    state('hide', style({opacity: 0})),
    state('show', style({opacity: 1})),
    transition(':enter', animate('700ms 1900ms')),
    transition('hide => show', [animate('700ms 1900ms')]),
    /*transition('show => hide', [animate('400ms 500ms')])*/
  ]),
  trigger('fade', [
    state('void', style({opacity: 0})),
    state('hide', style({opacity: 0})),
    state('show', style({opacity: 1})),
    transition(':enter', animate('500ms 800ms')),
    transition('hide => show', [animate('500ms 800ms')]),
    /*transition('show => hide', [animate('400ms 500ms')])*/
  ]),
  trigger('fadeRight', [
    state('void', style({opacity: 0, marginLeft: '2rem'})),
    transition(':enter', [animate('600ms 2700ms')]),
  ]),
  trigger('fadeLeft', [
    state('void', style({opacity: 0, marginRight: '2rem'})),
    transition(':enter', [animate('600ms 2700ms')]),
  ]),
  trigger('fadeRight2', [
    state('void', style({opacity: 0, marginLeft: '2rem'})),
    transition(':enter', [animate('600ms 3500ms')]),
  ]),
  trigger('fadeLeft2', [
    state('void', style({opacity: 0, marginRight: '2rem'})),
    transition(':enter', [animate('600ms 3500ms')]),
  ]),
  trigger('showHideTitleSection', [
    state('mobileHide', style({opacity: 0, marginTop: '-2rem'})),
    state('mobileShow', style({opacity: 1, marginBottom: '0'})),
    state('hide', style({opacity: 0, marginRight: '2rem'})),
    state('show', style({opacity: 1, marginRight: '0'})),
    transition('hide => show', [animate('400ms 300ms')]),
    transition('mobileHide => mobileShow', [animate('400ms 300ms')]),
  ]),
];
