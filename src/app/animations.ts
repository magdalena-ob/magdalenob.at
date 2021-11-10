import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export const FadeInAnimation = [
    trigger('fadeIn', [
        state(
            'in',
            style({
                opacity: '1'
            })
        ),
        state(
            'out',
            style({
                opacity: '0' 
            })
        ),
        transition('out => in', [
            animate('2000ms ease-in', style({ opacity: '1'}))
        ])
    ])
]; 