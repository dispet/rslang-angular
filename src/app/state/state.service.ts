import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPagination, IWord } from "../shared/models";


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly translationDisplaySubject$ = new BehaviorSubject<boolean>(false);
  private readonly controlsDisplaySubject$ = new BehaviorSubject<boolean>(false);
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

  setPaginationValues(navigate: any): void {
    this.updatePagination(navigate)
  }

  setWords(words: IWord[]): void {
    this.wordsSubject$.next(words);
  }

  updatePagination(value: IPagination): void {
    const nextValue = this.paginationSubject$.getValue();
    nextValue.group = value.group ?? nextValue.group;
    nextValue.page = value.page ?? nextValue.page;
    this.paginationSubject$.next(nextValue);
  }
}
