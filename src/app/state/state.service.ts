import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { IPagination, IWord } from "../shared/models";
import { Group, Page } from "../shared/types";


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly translationDisplaySubject$ = new BehaviorSubject<boolean>(true);
  private readonly controlsDisplaySubject$ = new BehaviorSubject<boolean>(true);
  private readonly groupNumberSubject$ = new BehaviorSubject<Group>(0);
  private readonly pageNumberSubject$ = new BehaviorSubject<Page>(0);
  private readonly wordsSubject$ = new BehaviorSubject<IWord[]>(null);
  private readonly paginationSubject$ = new BehaviorSubject<IPagination>({
    group: 0,
    page: 0
  })

  readonly translationDisplay$ = this.translationDisplaySubject$.asObservable();
  readonly controlsDisplay$ = this.controlsDisplaySubject$.asObservable();
  readonly groupNumber$ = this.groupNumberSubject$.asObservable().pipe(
    tap({
      next: (group) => this.updatePagination({ group })
    })
  );
  readonly pageNumber$ = this.pageNumberSubject$.asObservable().pipe(
    tap({
      next: (page) => this.updatePagination({ page })
    })
  );
  readonly words$ = this.wordsSubject$.asObservable();
  readonly pagination$ = this.paginationSubject$.asObservable();

  readonly MAX_PAGE_COUNT = 29;
  readonly MIN_PAGE_COUNT = 0;


  setTranslationDisplay(display: boolean) {
    this.translationDisplaySubject$.next(display);
  }

  setControlsDisplay(display: boolean) {
    this.controlsDisplaySubject$.next(display);
  }

  // getGroupNumberValue() {
  //   return this.groupNumberSubject$.value;
  // }

  setGroupNumber(number: number): void {
    this.groupNumberSubject$.next(number as Group);
  }

  // getPageNumberValue() {
  //   return this.pageNumberSubject$.value;
  // }

  setPageNumber(number: number): void {
    this.pageNumberSubject$.next(number as Page);
  }

  setNextPageNumber() {
    const currentPageValue = this.pageNumberSubject$.getValue();
    const nextValue = currentPageValue === this.MAX_PAGE_COUNT ? -1 : currentPageValue;
    this.pageNumberSubject$.next((nextValue + 1) as Page);
  }

  setPrevPageNumber() {
    const currentPageValue = this.pageNumberSubject$.getValue();
    const prevValue = currentPageValue === this.MIN_PAGE_COUNT ? 30 : currentPageValue;
    this.pageNumberSubject$.next((prevValue - 1) as Page);
  }

  setWords(words: IWord[]): void {
    this.wordsSubject$.next(words);
  }

  private updatePagination(value: IPagination): void {
    const nextValue = this.paginationSubject$.getValue();
    nextValue.group = value.group || nextValue.group;
    nextValue.page = value.page || nextValue.page;
    this.paginationSubject$.next(nextValue);
  }
}
