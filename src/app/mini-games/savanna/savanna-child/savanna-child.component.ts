import { Component, ElementRef, Input, OnInit, EventEmitter, Output, OnDestroy, HostListener } from '@angular/core';
import { IGameAnswer } from '../../models/game.model';
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
	@Input() words!: IWord[];
	@Output() passAnswer = new EventEmitter<IGameAnswer>();
	@Output() isGameEnd = new EventEmitter<boolean>();

	changeWordsInterval!: NodeJS.Timeout;
	englishWords: string[];
	russianWords: string[];
	// the word that comes down from top
	targetWord!: string;
	answer!: string;
	options: string[] = Array(4).fill('');
	// the count is used to count "targetWord"s
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
	// these sounds will play after user choose any option or when "targetWord"s state is 'bottom'
	correctSound = new Audio();
	wrongSound = new Audio();

	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		this.correctSound.src = '../../../../assets/savanna-game/correct.wav';
		this.wrongSound.src = '../../../../assets/savanna-game/wrong.wav';

		this.englishWords = this.words.map((wordObj) => wordObj.word);
		this.russianWords = this.words.map((wordObj) => wordObj.wordTranslate);

		// we begin new interval tochange words and animation states
		this.beginNewInterval();
	}

	// when component is destroyed, interval should stop.
	ngOnDestroy(): void {
		clearInterval(this.changeWordsInterval);
	}

	beginNewInterval() {
		// targetWord's state changes during the game('bottom', 'answered')
		// we have to assign  value 'top' to the targetWordState beginning new interval
		this.targetWordState = 'top';
		// when the state of targetWord is 'answered' , we begin new interwal
		// so that we have to clear old interval
		clearInterval(this.changeWordsInterval);

		// when the state of targetWord is 'answered' or 'bottom', our buttons takes styles
		// these styles should be visible as timeout value(0.5 second in our case)
		setTimeout(() => {
			// in the beginning of the game state of targetWord is 'top'
			// animation starts when the state changes so we change the state after 0.5 second
			// otherwise animaton starts after five second

			this.targetWordState = 'bottom';
			// change targetWord and options' values
			// otherwise they will be changed after five second
			this.changeWord();
			this.options = this.shuffleArray(this.makeOptions());

			// setInterval to change targetWord and options
			this.changeWordsInterval = setInterval(() => {
				// animation works only once
				// in order to make animation infinite we should change animation state every exact time
				this.changeAnimationState();
				this.changeWord();
				this.options = this.shuffleArray(this.makeOptions());
				// in order to animation happen we need tick
				setTimeout(() => {
					this.changeAnimationState();
				}, 0);
			}, 5000);
		}, 500);
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

	// we use this function to shuffle options and change words position in words arrray
	shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	// this function is called every round of the game
	// this function changes targetword and removes old button styles
	changeWord() {
		this.isClicked = false;
		this.removeStyles(this.choosenButton);
		this.removeStyles(this.correctButton);
		this.targetWord = this.englishWords[this.count++];

		// if words count graeter than or equal 21 the 'changeWordsInterval' should be cleared;
		if (this.count >= 21) {
			this.count = 0;
			this.isGameEnd.emit(true);
			clearInterval(this.changeWordsInterval);
		}
	}

	// every game has four different option and one of them is answer
	makeOptions() {
		let options: string[] = [];

		// since 'this.russianWords' must not change, we copy russianWords from 'this.russianWords'
		let russianWords = [...this.russianWords];

		// find answer from english words array
		this.answer = this.words.find((word) => {
			return word.word === this.targetWord;
		}).wordTranslate;

		// we should remove answer from russianWords, because it must not be duplicated in the options.
		russianWords.splice(
			russianWords.findIndex((word) => word === this.answer),
			1,
		);

		// make random options and then push the answer
		[options[0], options[1], options[2]] = this.shuffleArray(russianWords);
		options.push(this.answer);

		return options;
	}

	// the game must work with special keys also
	@HostListener('window:keydown', ['$event'])
	checkOnKeyboardEvent(event: KeyboardEvent) {
		let key = +event.key;
		// we have only four posssible keys
		if (!this.isClicked) {
			if (key === 1 || key === 2 || key === 3 || key === 4) {
				this.choosenButton = this.el.nativeElement.querySelectorAll('.option-word button')[key - 1];
				this.checkAnswer();
			}
		}
	}

	checkOnClickEvent(event: MouseEvent) {
		this.choosenButton = event.target as Element;
		this.checkAnswer();
	}

	checkAnswer() {
		// make buttons disabled
		this.isClicked = true;

		// options structure : "{{ i + 1 }}. {{ option }}" , we should remove '{{ i + 1 }}. '.
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
			clearInterval(this.changeWordsInterval);

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
		// console.log(this.words, choosenOption);
		let audioSrc = this.words.find((word) => {
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
}
