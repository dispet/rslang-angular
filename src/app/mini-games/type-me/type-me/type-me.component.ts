import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWord } from '../../../shared/models';
import { ApiService } from '../../../shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-me',
  templateUrl: './type-me.component.html',
  styleUrls: ['./type-me.component.scss'],
})
export class TypeMeComponent implements OnInit, OnDestroy {
  private groupFromUrl: number;
  private pageFromUrl: number;
  private subscription1$: Subscription;
  private subscription2$: Subscription;
  readonly MAX_WORDS_COUNT = 7;
  counterAnswers = 0;
  resultCounter = 0;
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

  getAnswer(isTrue: number): void {
    ++this.counterAnswers;
    this.resultCounter += isTrue;
  }

  sendStatistic() {}
}
