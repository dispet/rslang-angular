import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWord } from '../../../shared/models';

@Component({
  selector: 'app-item-audio-call',
  templateUrl: './item-audio-call.component.html',
  styleUrls: ['./item-audio-call.component.scss'],
})
export class ItemAudioCallComponent implements OnInit {
  wordsVariants: string[] = [];
  @Input() variantsMax = 4;
  @Input() VariantsRu: string[];
  @Input() word: IWord;
  @Output() result = new EventEmitter<IWord>();

  constructor() {}

  ngOnInit(): void {
    this.wordsVariants[0] = this.word.wordTranslate;
  }
}
