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
            animate('1500ms ease-in-out', style({ opacity: '1'}))
        ])
    ])
]; 