import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWord } from '../../../shared/models';

@Component({
  selector: 'app-item-type-me',
  templateUrl: './item-type-me.component.html',
  styleUrls: ['./item-type-me.component.scss'],
})
export class ItemTypeMeComponent implements OnInit {
  url = 'https://dispet.github.io/rslang-data/';
  isAnswerButtonDisable = false;
  correctAnswer = '';
  isTrue: number;
  @Input() word: IWord;
  @Output() answer = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  playAudio(url: string): void {
    const audio = new Audio();
    audio.src = this.url + url;
    audio.load();
    audio.play();
    audio.addEventListener('ended', function () {
      if (audio.duration === audio.currentTime) {
        audio.play();
        audio.pause();
        audio.currentTime = 0.0;
      }
    });
  }

  sendResult(answer: string) {
    this.isTrue = answer.toLowerCase().trim() === this.word.word ? 1 : 0;
    this.isAnswerButtonDisable = true;
    this.correctAnswer = this.word.word;
    this.answer.emit(this.isTrue);
  }
}
