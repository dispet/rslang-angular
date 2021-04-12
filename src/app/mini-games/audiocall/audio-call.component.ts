import { Component, OnInit } from '@angular/core';
import { IWord } from '../../shared/models';
import { ApiService } from '../../shared/services';

@Component({
  selector: 'app-audio-call',
  templateUrl: './audio-call.component.html',
  styleUrls: ['./audio-call.component.scss'],
})
export class AudioCallComponent implements OnInit {
  private maxWords = 7;
  VariantsRu: string[] = ['один', 'два', 'три'];
  allVariantsRu: string[];
  words: IWord[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getWords();
  }

  getWords() {
    this.apiService.getWords(1, 1).subscribe(
      (words) => {
        this.words = this.getRandomWords(words, this.maxWords);
        this.allVariantsRu = this.getAllVariantsRu(words);
      },
      (error) => console.error(error),
    );
  }
  getRandomWords(arr: IWord[], n: number): IWord[] {
    let result: IWord[] = [],
      len = arr.length;
    if (n > len) {
      console.error('Заданное количество слов для теста превышает предоставленный набор');
    }
    while (n) {
      let x = Math.floor(Math.random() * len);
      if (!result.includes(arr[x])) {
        result.push(arr[x]);
        n--;
      }
    }
    return result;
  }

  getAllVariantsRu(words: IWord[]) {
    let collectionWords = [];
    for (let i = 0; i < words.length; i++) {
      collectionWords.push(words[i].wordTranslate);
    }
    return collectionWords;
  }
}
