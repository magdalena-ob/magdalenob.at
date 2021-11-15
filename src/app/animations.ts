import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
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
            animate('1500ms ease-in-out', style({ opacity: '1' }))
        ])
    ]),

    trigger('slideUp', [
        state(
            'in',
            style({
                opacity: '1',
                transform: 'translateY(0)'
            })
        ),
        state(
            'out',
            style({
                opacity: '0',
                transform: 'translateY(250px)'
            })
        ),
        transition('out => in', [
            animate(
                '450ms ease-in-out',
                style({
                    opacity: '1',
                    transform: 'translateY(0)'
                })
            )
        ])
    ]),
    trigger('slideInLeft', [
        state(
            'in',
            style({
                opacity: '1',
                transform: 'translateX(0)'
            })
        ),
        state(
            'out',
            style({
                opacity: '0',
                transform: 'translateX(250px)'
            })
        ),
        transition('out => in', [
            animate(
                '450ms ease-in-out',
                style({
                    opacity: '1',
                    transform: 'translateX(0)'
                })
            )
        ])
    ]),
    trigger('slideInRight', [
        state(
            'in',
            style({
                opacity: '1',
                transform: 'translateX(0)'
            })
        ),
        state(
            'out',
            style({
                opacity: '0',
                transform: 'translateX(-250px)'
            })
        ),
        transition('out => in', [
            animate(
                '450ms ease-in-out',
                style({
                    opacity: '1',
                    transform: 'translateX(0)'
                })
            )
        ])
    ]),
    trigger('slideInChild', [
        transition('out => in', [
            query('.cont-journey',
                style({
                    opacity: '0',
                    transform: 'translateX(-250px)'
                }),
                {
                    optional: true,
                }),
            query('.cont-journey',
                stagger('225ms', [
                    animate(
                        '450ms ease-in',
                        style({
                            opacity: '1',
                            transform: 'translateX(0)'
                        }),
                    ),
                ]),
                {
                    optional: true
                }
            ),
        ])
    ])
];