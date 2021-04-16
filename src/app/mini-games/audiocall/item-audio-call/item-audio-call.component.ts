import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWord } from '../../../shared/models';

@Component({
  selector: 'app-item-audio-call',
  templateUrl: './item-audio-call.component.html',
  styleUrls: ['./item-audio-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemAudioCallComponent implements OnInit {
  private url = 'https://dispet.github.io/rslang-data/';
  isAnswerButtonDisable = false;
  correctAnswer = '';
  isTrue: number;
  @Input() getVariantsRu: string[];
  @Input() word: IWord;
  @Output() answer = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  playAudio(url: string): void {
    let audio = new Audio();
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

  sendResult(v: string) {
    this.isTrue = v === this.word.wordTranslate ? 1 : 0;
    this.isAnswerButtonDisable = true;
    this.correctAnswer = this.word.wordTranslate;
    this.answer.emit(this.isTrue);
  }
}
