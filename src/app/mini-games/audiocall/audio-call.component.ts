import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWord } from '../../shared/models';
import { ApiService } from '../../shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-audio-call',
  templateUrl: './audio-call.component.html',
  styleUrls: ['./audio-call.component.scss'],
})
export class AudioCallComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private variantsMax = 4;
  colorTub = '#22ca06';
  maxWords = 7;
  resultCounter = 0;
  variantsRuAll: string[][];
  allVariantsRu: string[];
  words: IWord[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getWords();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getWords() {
    this.subscription = this.apiService.getWords(1, 1).subscribe(
      (words) => {
        this.words = this.getRandomWords(words, this.maxWords);
        this.allVariantsRu = this.getAllVariantsRu(words);
        this.variantsRuAll = this.getVariantsRu(this.words, this.allVariantsRu, this.variantsMax);
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

  getVariantsRu(words: IWord[], allVariantsRu: string[], varNum: number) {
    let len = allVariantsRu.length;
    let resultArr: Array<string[]> = [];
    for (let i = 0; i < words.length; i++) {
      let result: string[] = [];
      result.push(words[i].wordTranslate);
      let n = varNum;
      while (n - 1) {
        let x = Math.floor(Math.random() * len);
        if (!result.includes(allVariantsRu[x])) {
          result.push(allVariantsRu[x]);
          n--;
        }
      }
      result.sort(function () {
        return Math.random() - 0.5;
      });
      resultArr.push(result);
    }
    return resultArr;
  }

  getAnswer(n: number) {
    this.resultCounter += n;
  }
}
