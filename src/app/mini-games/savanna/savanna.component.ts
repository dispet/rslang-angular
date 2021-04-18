import { Component } from '@angular/core';
import { IGameAnswer, IGameAnswers, IGameInfo } from '../models/game.model';
import { flyTopDown } from '../animations/savanna-animations';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models';
import { Group, Page } from 'src/app/shared/types';
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
  heartsCount = Array(5).fill('h');
  game: IGameAnswers = {
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
  gameInfo: IGameInfo = {
    name: 'Саванна',
    info: 'Вы можете выбрать ответ с помощью цифр 1, 2, 3 или 4 на клавиатуре или с помощью мыши.',
  };
  constructor(private apiService: ApiService) {}

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
    this.heartsCount.pop();
    if (this.heartsCount.length === 0) {
      this.endGame();
    }
  }
}
