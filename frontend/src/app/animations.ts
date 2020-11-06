import {animate, state, style, transition, trigger} from "@angular/animations";

export const fadeIn = trigger('enterAnim', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0 }))
  ])
])
