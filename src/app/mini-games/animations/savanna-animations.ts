import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const moveTargetWord = trigger('moveTargetWord', [
	state('top', style({ top: '5%' })),
	state('bottom', style({ top: '70%' })),
	state('answered', style({ opacity: 0 })),
	transition('top => bottom', animate('4500ms 500ms')),
	transition('bottom => top', [
		animate(500, keyframes([style({ opacity: 0, offset: 0 }), style({ opacity: 0, offset: 0.99 }), style({ opacity: 1, offset: 1 })])),
	]),
	transition(
		'answered => top',
		animate(500, keyframes([style({ opacity: 0, offset: 0 }), style({ opacity: 0, offset: 0.99 }), style({ opacity: 1, offset: 1 })])),
	),
]);

export const flyTopDown = trigger('flyTopDown', [
	state('top', style({ transform: 'translateY(0)' })),
	transition('void <=> *', [style({ top: '-100%', fontSize: '50px', color: 'blue' }), animate(500)]),
	transition('* => void', [
		animate(
			500,
			style({
				top: '100%',
				color: 'blue',
				fontSize: '50px',
			}),
		),
	]),
]);
