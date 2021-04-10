import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPagination, IWord } from "../shared/models";
import { Group, Page } from "../shared/types";


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly translationDisplaySubject$ = new BehaviorSubject<boolean>(true);
  private readonly controlsDisplaySubject$ = new BehaviorSubject<boolean>(true);
  private readonly wordsSubject$ = new BehaviorSubject<IWord[]>(null);
  private readonly paginationSubject$ = new BehaviorSubject<IPagination>({
    group: 0,
    page: 0
  })

  readonly translationDisplay$ = this.translationDisplaySubject$.asObservable();
  readonly controlsDisplay$ = this.controlsDisplaySubject$.asObservable();

  readonly words$ = this.wordsSubject$.asObservable();
  readonly pagination$ = this.paginationSubject$.asObservable();

  readonly MAX_PAGE_COUNT = 29;
  readonly MIN_PAGE_COUNT = 0;


  setTranslationDisplay(): void {
    this.translationDisplaySubject$.next(!this.translationDisplaySubject$.getValue());
  }

  setControlsDisplay(): void {
    this.controlsDisplaySubject$.next(!this.controlsDisplaySubject$.getValue());
  }

  setGroupNumber(number: number): void {
    this.updatePagination({group: number as Group})
  }

  setPageNumber(number: number): void {
    this.updatePagination({page: number as Page});
  }

  setNextPageNumber(): void {
    const currentPaginationValue = this.paginationSubject$.getValue();
    currentPaginationValue.page = (currentPaginationValue.page === this.MAX_PAGE_COUNT ? 0 : currentPaginationValue.page + 1) as Page;
    this.updatePagination(currentPaginationValue);
  }

  setPrevPageNumber(): void {
    const currentPaginationValue = this.paginationSubject$.getValue();
    currentPaginationValue.page = (currentPaginationValue.page === this.MIN_PAGE_COUNT ? 29 : currentPaginationValue.page - 1) as Page;
    this.updatePagination(currentPaginationValue);
  }

  setWords(words: IWord[]): void {
    this.wordsSubject$.next(words);
  }

  private updatePagination(value: IPagination): void {
    const nextValue = this.paginationSubject$.getValue();
    nextValue.group = value.group ?? nextValue.group;
    nextValue.page = value.page ?? nextValue.page;
    this.paginationSubject$.next(nextValue);
  }
}
