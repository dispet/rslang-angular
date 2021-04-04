import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { IGame, IGameAnswer } from '../models/savanna-game.model';
import { SavannaService } from '../services/savanna.service';
import { flyTopDown } from '../animations/savanna-animations'
@Component({
	selector: 'app-savanna',
	templateUrl: './savanna.component.html',
	styleUrls: ['./savanna.component.scss'],
	animations: [
		flyTopDown
	],
})
export class SavannaComponent implements OnInit, AfterViewInit {
	resultsModal!: Element;
	firstModal!: Element;
	isHeartRemoved = false;
	isGameEnd = false;
	isGameBegin = false;
	game: IGame = {
		answers: [],
		heartsCount: [`h`, `h`, `h`, `h`, `h`],
		correctAnswers: [],
		incorrectAnswers: [],
	};
	apiWords = this.savannaService.apiWords;
	savannaWrapperHeight = { height: '100%' };

	bgpY = '100%';
	backgroundPositionY = { 'background-position-y': this.bgpY };

	constructor(private savannaService: SavannaService, private el: ElementRef) {}
	ngOnInit(): void {}

	ngAfterViewInit() {
		this.firstModal = this.el.nativeElement.querySelector('.first-modal');
		this.resultsModal = this.el.nativeElement.querySelector('.results-modal');
	}

	beginTheGame() {
		this.isGameBegin = true;
		this.firstModal.classList.remove('modal-active');
		console.log(this.savannaService.apiWords);
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
