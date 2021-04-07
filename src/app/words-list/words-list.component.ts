import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IWord } from '../shared/models';
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
  words$: Observable<Array<IWord>> = this.stateFacade.words$;
  pagination$ = this.stateFacade.pagination$;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.stateFacade.loadWords().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  pickGroup(group: number): void {
    this.stateFacade.setGroup(group);
  }

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
