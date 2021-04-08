import { Component, ElementRef, Input, OnInit, EventEmitter, Output, OnDestroy, HostListener } from '@angular/core';
import { IGameAnswer } from '../../models/savanna-game.model';
import { moveTargetWord } from '../../animations/savanna-animations';
import { IWord } from 'src/app/shared/models/word.model';

@Component({
	selector: 'app-savanna-child',
	templateUrl: './savanna-child.component.html',
	styleUrls: ['./savanna-child.component.scss'],
	animations: [moveTargetWord],
})
export class SavannaChildComponent implements OnInit, OnDestroy {
	@Input() heartsCount!: number;
	@Input() responseWordsArray!: IWord[];
	@Output() passAnswer = new EventEmitter<IGameAnswer>();
	@Output() isGameEnd = new EventEmitter<boolean>();

	changeWordsInterval!: NodeJS.Timeout;
	englishWords: string[];
	russianWords: string[];
	// the word that comes down from top
	targetWord!: string;
	answer!: string;
	options: string[] = ['', '', '', ''];
	// the count is used to count 'targetWord's
	count = 0;
	choosenButton!: Element;
	correctButton!: Element;
	// component pass this object to the savanna component
	gameAnswer: IGameAnswer = {
		isCorrect: true,
		answer: {
			answer: '',
			answerTranslate: '',
		},
		audio: '',
	};
	// the buttons should be disabled after first button click event
	isClicked = false;
	// targetWord has animation targetWord may be three different states 'top', 'bottom', 'answered'
	// default state is 'top'
	targetWordState = 'top';
	choosenOption = '';
	// these sounds will play after user choose any option or when 'targetWord's state is 'bottom'
	correctSound = new Audio();
	wrongSound = new Audio();

	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		this.correctSound.src = '../../../../assets/savanna-game/correct.wav';
		this.wrongSound.src = '../../../../assets/savanna-game/wrong.wav';

		this.englishWords = this.responseWordsArray.map((wordObj) => wordObj.word);
		this.russianWords = this.responseWordsArray.map((wordObj) => wordObj.wordTranslate);

		// 'changeWordsInterval' begins immediately when component initializes
		this.beginNewInterval();
	}

	ngOnDestroy(): void {
		this.clearGivenInterval(this.changeWordsInterval);
	}

	@HostListener('window:keydown', ['$event'])
	checkOnKeyboardEvent(event: KeyboardEvent) {
		this.choosenButton = this.el.nativeElement.querySelectorAll('.option-word button')[+event.key - 1];
		this.checkAnswer();
	}

	shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// the words change every exact time
	changeWord() {
		this.isClicked = false;
		this.removeStyles(this.choosenButton);
		this.removeStyles(this.correctButton);
		this.targetWord = this.englishWords[this.count++];

		// if words count graeter than or equal 21 the 'changeWordsInterval' should be cleared;
		if (this.count >= 21) {
			this.count = 0;
			this.isGameEnd.emit(true);
			this.clearGivenInterval(this.changeWordsInterval);
		}
	}

	// every game has four different option and one of them is answer
	makeOptions() {
		let options: string[] = [];

		// since 'this.russianWords' must not change, we copy russianWords from 'this.russianWords'
		let russianWords = [...this.russianWords];
		let answer = '';

		// find answer index from english words array then find answer
		let answerIndex = this.englishWords.findIndex((word) => word === this.targetWord);
		if (answerIndex !== -1) {
			answer = this.russianWords[answerIndex];
		}

		this.answer = answer;

		// we should remove answer from russianWords, because it must not be duplicated in the options.
		russianWords.splice(
			russianWords.findIndex((word) => word === answer),
			1,
		);

		// make random options and then push an answer
		[options[0], options[1], options[2]] = this.shuffleArray(russianWords);
		options.push(answer);
		return options;
	}

	checkOnClickEvent(event: MouseEvent) {
		this.choosenButton = event.target as Element;
		this.checkAnswer();
	}

	checkAnswer() {
		// make buttons disabled
		this.isClicked = true;

		// options structure : "1. {{options[1]}}" , we should remove '1. '.
		this.choosenOption = this.choosenButton.textContent?.slice(3).trim() || "You haven't choosen.";
		if (this.choosenOption === this.answer) {
			this.inCaseTheAnswerTrue();
		} else {
			this.inCaseTheAnswerFalse();
		}

		// when the state of targetWord is 'answered', targetWord moves to the top(itselves default place).
		this.targetWordState = 'answered';

		// in order to animation happen we need tick
		setTimeout(() => {
			this.beginNewInterval();
		}, 0);
	}

	inCaseTheAnswerTrue() {
		this.correctSound.play();
		this.choosenButton.classList.add('correct');
		this.passGameAnswer(true);
	}

	inCaseTheAnswerFalse() {
		if (this.heartsCount === 1) {
			this.clearGivenInterval(this.changeWordsInterval);
			this.isGameEnd.emit(true);
		} else {
			this.wrongSound.play();
			this.correctButton = Array.from(this.el.nativeElement.querySelectorAll('.option-word button') as Element[]).find(
				(button: Element) => {
					return button.textContent?.slice(3).trim() === this.answer;
				},
			) as Element;

			this.correctButton.classList.add('correct');
			if (this.choosenButton) {
				this.choosenButton.classList.add('incorrect');
			}
		}

		this.passGameAnswer(false);
	}

	removeStyles(button: Element) {
		// beginning of the game button may be undefined
		if (button) {
			button.classList.remove('correct');
			button.classList.remove('incorrect');
		}
	}

	findAudio(choosenOption: string) {
		let audioSrc = this.responseWordsArray.find((word) => {
			return word.wordTranslate === choosenOption;
		}).audio;
		return audioSrc;
	}

	passGameAnswer(isCorrect: boolean) {
		if (isCorrect) {
			this.gameAnswer.isCorrect = true;
			this.gameAnswer.answer = {
				answer: this.choosenOption,
				answerTranslate: this.targetWord,
			};
			this.gameAnswer.audio = this.findAudio(this.choosenOption);
		} else {
			this.gameAnswer.isCorrect = false;
			this.gameAnswer.answer = {
				answer: this.answer,
				answerTranslate: this.targetWord,
			};
			this.gameAnswer.audio = this.findAudio(this.answer);
		}
		this.passAnswer.emit(this.gameAnswer);
	}

	changeAnimationState() {
		if (this.targetWordState === 'top') {
			this.targetWordState = 'bottom';
		} else {
			// when user doesn't choose any option we do
			this.choosenOption = "You haven't choosen";
			this.targetWordState = 'top';
			this.inCaseTheAnswerFalse();
		}
	}

	clearGivenInterval(intervalId: NodeJS.Timeout) {
		clearInterval(intervalId);
	}

	beginNewInterval() {
		// targetWord's state changes during the game therefore
		// we have to assign  value 'top' to the targetWordState beginning new interval
		this.targetWordState = 'top';
		// when the state of targetWord is 'answered' , we begin new interwal
		// so that we have to clear old interval
		this.clearGivenInterval(this.changeWordsInterval);

		// when the state of targetWord is 'answered' or 'bottom', our buttons takes styles
		// these styles will be visible as timeout value(0.5 second in our case)
		// settimeout works during animation delay.
		setTimeout(() => {
			// in the beginning of the game state of targetWord is 'top'
			// animation starts when the state change so we change the state after 0.5 second
			// otherwise animaton starts after five second

			this.targetWordState = 'bottom';
			// change targetWord and options' values
			this.changeWord();
			this.options = this.shuffleArray(this.makeOptions());

			// setInterval to change targetWord and options
			this.changeWordsInterval = setInterval(() => {
				// animation works only once
				// in order to make animation infinite we should change animation state every exact time
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
