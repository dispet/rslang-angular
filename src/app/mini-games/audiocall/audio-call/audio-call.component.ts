import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWord } from '../../../shared/models';
import { ApiService } from '../../../shared/services';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audio-call',
  templateUrl: './audio-call.component.html',
  styleUrls: ['./audio-call.component.scss'],
})
export class AudioCallComponent implements OnInit, OnDestroy {
  private groupFromUrl: number;
  private pageFromUrl: number;
  private subscription1$: Subscription;
  private subscription2$: Subscription;
  readonly MAX_VARIANTS_COUNT = 4;
  readonly MAX_WORDS_COUNT = 7;
  resultCounter = 0;
  rusVariantsSubArray: string[][];
  rusVariantsArray: string[];
  words: IWord[];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadDataFromRoute();
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }

  loadDataFromRoute() {
    this.subscription2$ = this.route.paramMap.subscribe((params) => {
      this.groupFromUrl = +params.get('group');
      this.pageFromUrl = +params.get('page');
      if (this.groupFromUrl && this.pageFromUrl) {
        this.getWords(this.groupFromUrl - 1, this.groupFromUrl - 1);
      } else if (this.groupFromUrl) {
        const pageNumber = Math.floor(Math.random() * 30) - 1;
        this.getWords(this.groupFromUrl - 1, pageNumber);
      } else {
        this.getWords(1, 1);
      }
    });
  }

  getWords(group, page) {
    this.subscription1$ = this.apiService.getWords(group, page).subscribe(
      (words) => {
        this.words = this.getRandomWords(words, this.MAX_WORDS_COUNT);
        this.rusVariantsArray = this.getAllVariantsRu(words);
        this.rusVariantsSubArray = this.getVariantsRu(this.words, this.rusVariantsArray, this.MAX_VARIANTS_COUNT);
      },
      (error) => console.error(error),
    );
  }

  getRandomWords(arr: IWord[], wordsCount: number): IWord[] {
    const result: IWord[] = [];
    let length = arr.length;
    if (wordsCount > length) {
      // для вывода информации в консоль при разработке
      console.error('Заданное количество слов для теста превышает предоставленный набор');
    }
    while (wordsCount) {
      let x = Math.floor(Math.random() * length);
      if (!result.includes(arr[x])) {
        result.push(arr[x]);
        wordsCount--;
      }
    }
    return result;
  }

  getAllVariantsRu(words: IWord[]) {
    const collectionWords = [];
    for (let i = 0; i < words.length; i++) {
      collectionWords.push(words[i].wordTranslate);
    }
    return collectionWords;
  }

  getVariantsRu(words: IWord[], allVariantsRu: string[], variantsCount: number) {
    let length = allVariantsRu.length;
    let resultArr: Array<string[]> = [];
    for (let i = 0; i < words.length; i++) {
      let result: string[] = [];
      result.push(words[i].wordTranslate);
      let n = variantsCount;
      while (n - 1) {
        let x = Math.floor(Math.random() * length);
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
