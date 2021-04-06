import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "../shared";
import { IWord } from "../shared/models";
import { Group, Page } from "../shared/types";


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _translationDisplay$ = new BehaviorSubject<boolean>(true);
  private readonly _controlsDisplay$ = new BehaviorSubject<boolean>(true);
  private readonly _groupNumber$ = new BehaviorSubject<Group>(0);
  private readonly _pageNumber$ = new BehaviorSubject<Page>(0);
  private readonly _words$ = new BehaviorSubject<IWord[]>(null);

  constructor(private apiService: ApiService) {}

  readonly translationDisplay$ = this._translationDisplay$.asObservable();
  readonly controlsDisplay$ = this._controlsDisplay$.asObservable();
  readonly groupNumber$ = this._groupNumber$.asObservable();
  readonly pageNumber$ = this._pageNumber$.asObservable();
  readonly words$ = this._words$.asObservable();

  readonly triggerLoadingWords$ = new EventEmitter<void>();

  setTranslationDisplay(display: boolean) {
    this._translationDisplay$.next(display);
  }

  setControlsDisplay(display: boolean) {
    this._controlsDisplay$.next(display);
  }

  getGroupNumberValue() {
    return this._groupNumber$.value;
  }

  setGroupNumber(number: Group): void {
    this._groupNumber$.next(number);
    this.triggerLoadingWords$.emit();
  }

  getPageNumberValue() {
    return this._pageNumber$.value;
  }

  setPageNumber(number: Page): void {
    this._pageNumber$.next(number);
    this.triggerLoadingWords$.emit();
  }

  // loadWords() {
  //   return this.apiService.getWords(this._groupNumber$.value, this._pageNumber$.value);
  // }

  setWords(words: IWord[]): void {
    this._words$.next(words);
  }
}
