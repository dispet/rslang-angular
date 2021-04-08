import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IGame, IGameAnswer } from '../models/savanna-game.model';
import { flyTopDown } from '../animations/savanna-animations';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models';
import { Group, Page } from 'src/app/shared/types';
@Component({
	selector: 'app-savanna',
	templateUrl: './savanna.component.html',
	styleUrls: ['./savanna.component.scss'],
	animations: [flyTopDown],
})
export class SavannaComponent implements OnInit, AfterViewInit, OnDestroy {
	resultsModal!: Element;
	firstModal!: Element;
	isHeartRemoved = false;
	isGameEnd = false;
	isGameBegin = false;
	isResponseReached = false;

	//
	choosenGroup: Group;
	randomPage: Page;
	responseWordsArray!: IWord[];
	//
	game: IGame = {
		answers: [],
		heartsCount: [`h`, `h`, `h`, `h`, `h`],
		correctAnswers: [],
		incorrectAnswers: [],
		correctAnswersTranslate: [],
		incorrectAnswersTranslate: [],
		correctAnswerAudios: [],
		incorrectAnswerAudios: [],
	};
	difficultyGroups = [1, 2, 3, 4, 5, 6];
	savannaWrapperHeight = { height: '100%' };
	bgpY = '100%';
	backgroundPositionY = { 'background-position-y': this.bgpY };

	constructor(private el: ElementRef, private apiService: ApiService) {}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.isResponseReached = false;
	}

	ngAfterViewInit() {
		this.firstModal = this.el.nativeElement.querySelector('.first-modal');
		this.resultsModal = this.el.nativeElement.querySelector('.results-modal');
	}

	clearGivenInterval(intervalId: number) {
		clearInterval(intervalId);
	}

	beginTheGame(button: MouseEvent) {
		let level = +(button.target as Element).innerHTML;
		this.isGameBegin = true;
		this.choosenGroup = (level - 1) as Group;
		this.getChoosenGroupWords();
		this.firstModal.classList.remove('modal-active');
	}

	getChoosenGroupWords() {
		this.randomPage = Math.floor(Math.random() * 20) as Page;
		this.apiService.getWords(this.choosenGroup, this.randomPage).subscribe((response) => {
			this.responseWordsArray = response;
			this.isResponseReached = true;
		});
	}

	recieveAnswer(answerObject: IGameAnswer) {
		if (answerObject.isCorrect === false) {
			this.decreaseHeart();
			this.game.incorrectAnswers.push(answerObject.answer.answer);
			this.game.incorrectAnswersTranslate.push(answerObject.answer.answerTranslate);
			this.game.incorrectAnswerAudios.push(answerObject.audio);
		} else {
			this.game.correctAnswers.push(answerObject.answer.answer);
			this.game.correctAnswersTranslate.push(answerObject.answer.answerTranslate);
			this.game.correctAnswerAudios.push(answerObject.audio);
		}
		this.bgpY = `${+this.bgpY.replace(/\%/g, '') - 5}%`;
		this.backgroundPositionY = { 'background-position-y': this.bgpY };
	}

	playWordAudio(event: MouseEvent) {
		let button = event.target as Element;
		let currentAudio;
		let idC = Array.from(button.classList).find((className) => className.includes('playAudioButtonForC'));
		let idIn = Array.from(button.classList).find((className) => className.includes('playAudioButtonForIn'));
		let id = (idC || idIn).replace(/\D/g, '');
		if (idIn) {
			currentAudio = this.el.nativeElement.querySelector(`.audioIn${id}`);
		} else {
			currentAudio = this.el.nativeElement.querySelector(`.audioC${id}`);
		}
		currentAudio.play();
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
		this.resultsModal.classList.add('modal-active');
		this.savannaWrapperHeight = { height: '0%' };
	}

	closeModal() {
		this.savannaWrapperHeight = { height: '100%' };
		this.resultsModal.classList.remove('modal-active');
	}
}
