import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { IGame, IGameAnswer } from '../models/savanna-game.model';
import { SavannaService } from '../services/savanna.service';

@Component({
	selector: 'app-savanna',
	templateUrl: './savanna.component.html',
	styleUrls: ['./savanna.component.scss'],
	animations: [
		trigger('flyTopDown', [
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
		]),
	],
})
export class SavannaComponent implements OnInit, AfterViewInit {
	modal!: Element;
	isHeartRemoved = false;
	isGameEnd: boolean = false;
	game: IGame = {
		answers: [],
		heartsCount: [`h`, `h`, `h`, `h`, `h`],
		correctAnswers: [],
		incorrectAnswers: [],
	};
	savannaWrapperHeight = { height: '100%' };

	constructor(private savannaSvc: SavannaService, private el: ElementRef) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.modal = this.el.nativeElement.querySelector('.modal');
	}

	recieveAnswer(answerObject: IGameAnswer) {
		if (answerObject.isCorrect === false) {
			this.decreaseHeart();
			this.game.incorrectAnswers.push(answerObject.choosenOption);
		} else {
			this.game.correctAnswers.push(answerObject.choosenOption);
		}
		this.game.answers.push(answerObject.isCorrect);
	}

	decreaseHeart() {
		this.isHeartRemoved = true;
		this.game.heartsCount.pop();
		if (this.game.heartsCount.length === 0) {
			this.gameEnd(true);
		}
	}

	gameEnd(isGameEnd: boolean) {
		if (isGameEnd === true) {
			this.openModal();
			this.isGameEnd = true;
		}
	}

	openModal() {
		this.modal.classList.add('modal-active');
		this.savannaWrapperHeight = { height: '0%' };
	}

	closeModal() {
		this.savannaWrapperHeight = { height: '100%' };
		this.modal.classList.remove('modal-active');
	}
}
