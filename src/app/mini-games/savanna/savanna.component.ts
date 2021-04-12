import { Component } from '@angular/core';
import { IGame, IGameAnswer } from '../models/savanna-game.model';
import { flyTopDown } from '../animations/savanna-animations';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models';
import { Group, Page } from 'src/app/shared/types';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-savanna',
	templateUrl: './savanna.component.html',
	styleUrls: ['./savanna.component.scss'],
	animations: [flyTopDown],
})
export class SavannaComponent {
	displayFirstModal = true;
	displayResultsModal = false;
	words$!: Observable<IWord[]>;
	isGameOver = false;
	game: IGame = {
		answers: [],
		heartsCount: Array(5).fill('h'),
		correctAnswers: [],
		incorrectAnswers: [],
		correctAnswersTranslate: [],
		incorrectAnswersTranslate: [],
		correctAnswerAudios: [],
		incorrectAnswerAudios: [],
	};
	savannaWrapperHeight = { height: '100%' };
	private bgpY = '100%';
	backgroundPositionY = { 'background-position-y': this.bgpY };

	constructor(private apiService: ApiService, public dialog: MatDialog) {}

	beginTheGame(level: Group) {
		this.getChoosenGroupWords(level);
		this.displayFirstModal = false;
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

	closeResultsModal() {
		this.savannaWrapperHeight = { height: '100%' };
		this.displayFirstModal = false;
	}

	endGame() {
		this.isGameOver = true;
		this.openResultsModal();
	}

	private getChoosenGroupWords(level: Group) {
		const randomPage = Math.floor(Math.random() * 20) as Page;
		this.words$ = this.apiService.getWords(level, randomPage);
	}

	private openResultsModal() {
		this.displayResultsModal = true;
		this.savannaWrapperHeight = { height: '0%' };
	}

	private decreaseHeart() {
		this.game.heartsCount.pop();
		if (this.game.heartsCount.length === 0) {
			this.endGame();
		}
	}
}
