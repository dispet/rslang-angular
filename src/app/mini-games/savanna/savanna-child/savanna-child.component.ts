import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IGameAnswer } from '../../models/savanna-game.model';
import { SavannaService } from '../../services/savanna.service';

@Component({
	selector: 'app-savanna-child',
	templateUrl: './savanna-child.component.html',
	styleUrls: ['./savanna-child.component.scss'],
	animations: [
		trigger('moveTargetWord', [
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
		]),
	],
})
export class SavannaChildComponent implements OnInit, OnDestroy {
	@Input() heartsCount!: number;
	@Output() passAnswer = new EventEmitter<IGameAnswer>();
	@Output() isGameEnd = new EventEmitter<boolean>();

	changeWordsInterval!: NodeJS.Timeout;
	englishWords = this.savannaSvc.englishWords;
	russianWords = this.savannaSvc.russianWords;
	wordsEntries = Object.entries(this.savannaSvc.wordsObj);
	targetWord!: string;
	answer!: string;
	options: string[] = ['', '', '', ''];
	count = 0;
	clickedButton!: Element;
	correctButton!: Element;
	gameAnswer: IGameAnswer = {
		isCorrect: true,
		choosenOption: '',
	};
	isClicked = false;
	targetWordState = 'top';
	choosenOption = "You haven't choosen.";
	correctSound = new Audio();
	wrongSound = new Audio();

	constructor(private el: ElementRef, private router: Router, private savannaSvc: SavannaService) {}

	ngOnInit(): void {
		this.correctSound.src = '../../../../assets/savanna-game/correct.wav';
		this.wrongSound.src = '../../../../assets/savanna-game/wrong.wav';
		this.beginNewInterval();
	}

	ngOnDestroy(): void {
		clearInterval(this.changeWordsInterval);
	}

	changeWord() {
		this.isClicked = false;
		this.removeStyles(this.clickedButton);
		this.removeStyles(this.correctButton);
		this.targetWord = this.englishWords[this.count++];
		if (this.count >= 21) {
			this.count = 0;
			this.isGameEnd.emit(true);
			this.ngOnDestroy();
		}
	}

	makeOptions() {
		let options: string[] = [];
		let russianWords = [...this.russianWords];
		let answer = '';
		let answerEntry = this.wordsEntries.find((entry) => entry[1] === this.targetWord);

		if (answerEntry) {
			answer = answerEntry[0];
		}

		this.answer = answer;

		russianWords.splice(
			russianWords.findIndex((word) => word === answer),
			1,
		);

		[options[0], options[1], options[2]] = this.shuffleArray(russianWords);

		options.push(answer);
		return options;
	}

	shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	checkAnswer(event: MouseEvent) {
		this.clickedButton = event.target as Element;
		this.isClicked = true;

		this.choosenOption = this.clickedButton.textContent?.slice(3).trim() || "You haven't choosen.";
		if (this.choosenOption === this.answer) {
			this.inCaseTheAnswerTrue();
		} else {
			this.inCaseTheAnswerFalse();
		}

		this.targetWordState = 'answered';
		setTimeout(() => {
			this.beginNewInterval();
		}, 0);
	}

	inCaseTheAnswerTrue() {
		this.correctSound.play();
		this.correctSound;
		this.clickedButton.classList.add('correct');
		this.gameAnswer.isCorrect = true;
		this.gameAnswer.choosenOption = this.choosenOption;
		this.passAnswer.emit(this.gameAnswer);
	}

	inCaseTheAnswerFalse() {
		this.wrongSound.play();
		this.correctButton = Array.from(this.el.nativeElement.querySelectorAll('.option-word button') as Element[]).find((button: Element) => {
			return button.textContent?.slice(3).trim() === this.answer;
		}) as Element;

		this.correctButton.classList.add('correct');
		if (this.clickedButton) {
			this.clickedButton.classList.add('incorrect');
		}
		this.gameAnswer.isCorrect = false;
		this.gameAnswer.choosenOption = this.choosenOption;
		this.passAnswer.emit(this.gameAnswer);

		if (this.heartsCount === 1) {
			this.ngOnDestroy();
			this.isGameEnd.emit(true);
		}
	}

	changeAnimationState() {
		if (this.targetWordState === 'top') {
			this.targetWordState = 'bottom';
		} else {
			this.choosenOption = "You haven't choosen";
			this.inCaseTheAnswerFalse();
			this.targetWordState = 'top';
		}
	}

	removeStyles(button: Element) {
		if (!button) {
			setTimeout(() => {
				return '';
			}, 5000);
		} else {
			button.classList.remove('correct');
			button.classList.remove('incorrect');
		}
	}

	beginNewInterval() {
		this.targetWordState = 'top';
		this.ngOnDestroy();
		setTimeout(() => {
			this.targetWordState = 'bottom';
			this.changeWord();
			this.options = this.shuffleArray(this.makeOptions());
			this.changeWordsInterval = setInterval(() => {
				this.changeAnimationState();
				this.changeWord();
				this.options = this.shuffleArray(this.makeOptions());
				setTimeout(() => {
					this.changeAnimationState();
				}, 0);
			}, 5000);
		}, 500);
	}
}
