import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { IGame, IGameAnswer } from '../models/savanna-game.model';
import { SavannaService } from '../services/savanna.service';
import { flyTopDown } from '../animations/savanna-animations';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models';
import { Group } from 'src/app/shared/types';
@Component({
	selector: 'app-savanna',
	templateUrl: './savanna.component.html',
	styleUrls: ['./savanna.component.scss'],
	animations: [flyTopDown],
})
export class SavannaComponent implements OnInit, AfterViewInit {
	resultsModal!: Element;
	firstModal!: Element;
	isHeartRemoved = false;
	isGameEnd = false;
	isGameBegin = false;
	isResponseReached = this.savannaService.responseReached;
	game: IGame = {
		answers: [],
		heartsCount: [`h`, `h`, `h`, `h`, `h`],
		correctAnswers: [],
		incorrectAnswers: [],
	};
	savannaWrapperHeight = { height: '100%' };
	responseArray: IWord;
	bgpY = '100%';
	backgroundPositionY = { 'background-position-y': this.bgpY };

	constructor(private savannaService: SavannaService, private el: ElementRef, private apiService: ApiService) {}
	ngOnInit(): void {
		let waitResponse;
		waitResponse = setInterval(() => {
			this.isResponseReached = this.savannaService.responseReached;

			if (this.isResponseReached === true) {
				this.clearGivenInterval(waitResponse);
			}
		}, 500);
	}

	ngAfterViewInit() {
		this.firstModal = this.el.nativeElement.querySelector('.first-modal');
		this.resultsModal = this.el.nativeElement.querySelector('.results-modal');
	}

	clearGivenInterval(intervalId) {
		clearInterval(intervalId);
	}

	beginTheGame(button: MouseEvent) {
		let level = +(button.target as Element).innerHTML as Group;
		this.isGameBegin = true;
		console.log((button.target as Element).innerHTML, typeof level);

		this.savannaService.choosenGroup = level;
		this.savannaService.getChoosenWords();
		this.firstModal.classList.remove('modal-active');
	}

	recieveAnswer(answerObject: IGameAnswer) {
		if (answerObject.isCorrect === false) {
			this.decreaseHeart();
			this.game.incorrectAnswers.push(answerObject.choosenOption);
		} else {
			this.game.correctAnswers.push(answerObject.choosenOption);
		}
		this.game.answers.push(answerObject.isCorrect);
		this.bgpY = `${+this.bgpY.replace(/\%/g, '') - 5}%`;
		this.backgroundPositionY = { 'background-position-y': this.bgpY };
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
