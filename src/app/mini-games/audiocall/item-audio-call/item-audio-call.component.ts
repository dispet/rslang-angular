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
  disabledButton = false;
  correctAnswer = '';
  val: number;
  @Input() getVariantsRu: string[];
  @Input() word: IWord;
  @Output() answer = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  playAudio(url1: string): void {
    const audio = new Audio();
    audio.src = this.url + url1;
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
    this.val = v === this.word.wordTranslate ? 1 : 0;
    this.disabledButton = true;
    this.correctAnswer = this.word.wordTranslate;
    this.answer.emit(this.val);
  }
}
