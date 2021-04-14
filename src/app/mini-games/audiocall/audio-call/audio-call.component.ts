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
  private groupFromUrl: string;
  private pageFromUrl: string;
  private subscription1$: Subscription;
  private subscription2$: Subscription;
  private variantsMax = 4;
  readonly MAX_WORDS_COUNT = 7;
  resultCounter = 0;
  rusVariantsSubArray: string[][];
  rusVariantsArray: string[];
  words: IWord[];

  constructor(private apiService: ApiService, private activateRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.getWords(1, 1);
    this.loadDataFromRoute();
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }

  loadDataFromRoute() {
    this.subscription2$ = this.activateRouter.paramMap.subscribe((params) => {
      this.groupFromUrl = params.get('group');
      this.pageFromUrl = params.get('page');
      if (this.groupFromUrl && this.pageFromUrl) {
        console.log('groupFromUrl: ' + this.groupFromUrl + ' / pageFromUrl: ' + this.pageFromUrl);
        // this.getWords(groupFromUrl, groupFromUrl);
      } else if (this.groupFromUrl) {
        console.log('groupFromUrl: ' + this.groupFromUrl);
        // this.getWords(this.groupFromUrl, 1);
      } else {
        console.log('groupFromUrl и pageFromUrl не получены');
        // this.getWords(1, 1);
      }
    });
  }

  getWords(group, page) {
    this.loadDataFromRoute();
    this.subscription1$ = this.apiService.getWords(group, page).subscribe(
      (words) => {
        this.words = this.getRandomWords(words, this.MAX_WORDS_COUNT);
        this.rusVariantsArray = this.getAllVariantsRu(words);
        this.rusVariantsSubArray = this.getVariantsRu(this.words, this.rusVariantsArray, this.variantsMax);
      },
      (error) => console.error(error),
    );
  }

  getRandomWords(arr: IWord[], n: number): IWord[] {
    let result: IWord[] = [],
      len = arr.length;
    if (n > len) {
      // для вывода информации в консоль при разработке
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
