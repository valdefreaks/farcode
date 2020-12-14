import { trigger, state, style, animate, transition } from '@angular/animations';

export const animations = [
    trigger('fadeTop', [
        state('void', style({ marginTop: '-3.5rem', opacity: 0 })),
        transition(':enter', [animate('1000ms 300ms')])
    ]),
    trigger('fade', [
        state('void', style({opacity: 0,})),
        state('hide', style({ opacity: 0 })),
        state('show', style({ opacity: 1 })),
        transition(':enter', animate('500ms 1600ms')),
        transition('hide => show', [animate('700ms 1500ms')]),
        transition('show => hide', [animate('700ms 500ms')])
    ]),
    trigger('fadeRight', [
        state('void', style({ opacity: 0, marginLeft: '2rem' })),
        transition(':enter', [animate('700ms 2300ms')])
    ]),
    trigger('fadeLeft', [
        state('void', style({ opacity: 0, marginRight: '2rem' })),
        transition(':enter', [animate('700ms 2300ms')])
    ]),
    trigger('fadeRight2', [
        state('void', style({ opacity: 0, marginLeft: '2rem' })),
        transition(':enter', [animate('700ms 3200ms')])
    ]),
    trigger('fadeLeft2', [
        state('void', style({ opacity: 0, marginRight: '2rem' })),
        transition(':enter', [animate('700ms 3200ms')])
    ]),
    trigger('fadeRightNav', [
        state('void', style({ opacity: 0, paddingRight: '0' })),
        transition(':enter', [animate('700ms 4100ms')])
    ]),
    trigger('showHideTitleSection', [
        state('mobileHide', style({ opacity: 0, marginTop: '-2rem' })),
        state('mobileShow', style({ opacity: 1, marginBottom: '0'})),
        state('hide', style({ opacity: 0, marginRight: '2rem'})),
        state('show', style({ opacity: 1, marginRight: '0' })),
        transition('hide <=> show', [animate('700ms 500ms')]),
        transition('mobileHide <=> mobileShow', [animate('700ms 500ms')])
    ]),
    
]
/*export let fadeTop = trigger('fadeTop', [
    state('void', style({ marginTop: '-3.5rem', opacity: 0 })),
    transition(':enter', [animate('1000ms 300ms')])
]);

export let fade = trigger('fade', [
    state('void', style({opacity: 0,})),
    transition(':enter', animate('500ms 1600ms'))
]);

export let fadeRight = trigger('fadeRight', [
    state('void', style({ opacity: 0, marginLeft: '2rem' })),
    transition(':enter', [animate('700ms 2300ms')])
]);
export let fadeLeft = trigger('fadeLeft', [
    state('void', style({ opacity: 0, marginRight: '2rem' })),
    transition(':enter', [animate('700ms 2300ms')])
]);
export let fadeRight2 = trigger('fadeRight2', [
    state('void', style({ opacity: 0, marginLeft: '2rem' })),
    transition(':enter', [animate('700ms 3200ms')])
]);
export let fadeLeft2 = trigger('fadeLeft2', [
    state('void', style({ opacity: 0, marginRight: '2rem' })),
    transition(':enter', [animate('700ms 3200ms')])
]);
export let fadeRightNav = trigger('fadeRightNav', [
    state('void', style({ opacity: 0, paddingRight: '0' })),
    transition(':enter', [animate('700ms 4100ms')])
]);

export let showHideLeft = trigger('showHideLeft', [
    state('hide', style({ opacity: 0, marginRight: '2rem' })),
    state('show', style({ opacity: 1, marginRight: '0' })),
    transition('hide <=> show', [animate('700ms 500ms')])
]);*/