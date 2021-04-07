import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IWord } from '../shared/models';
import { Group, Page } from '../shared/types';
import { SettingsFacade } from '../state/settings-facade.service';
import { FacadeService } from '../state/state-facade.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit, OnDestroy {
  constructor(private stateFacade: FacadeService, private settingsFacade: SettingsFacade) {}

  isTranslationDisplay$: Observable<boolean> = this.settingsFacade.isTranslationDisplay$;
  isConstrolsDisplay$: Observable<boolean> = this.settingsFacade.isConstrolsDisplay$;
  pageNumber$: Observable<Page> = this.stateFacade.page;
  words$: Observable<Array<IWord>> = this.stateFacade.words$;
  words: IWord[];

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.stateFacade.loadWords().pipe(takeUntil(this.destroy$)).subscribe(
      words => {
      this.words = words;
      console.log(this.words);
    });
    // this.getWords();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // getWords() {
  //   this.words$.subscribe(words => {
  //     this.words = words;
  //   })
  // }

  pickGroup(group: number): void {
    this.stateFacade.setGroup(group);
  }

  // setGroupNumber(number: Group) {
  //   this.stateFacade.setGroupNumber(number);
  // }

  nextPage(): void {
    this.stateFacade.setNextPage();
  }

  prevPage(): void {
    this.stateFacade.setPrevPage();
  }

  firstPage(): void {
    this.stateFacade.setFirstPage();
  }

  lastPage(): void {
    this.stateFacade.setLastPage();
  }

}
