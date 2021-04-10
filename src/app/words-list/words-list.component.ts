import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SettingsFacade } from '../state/settings-facade.service';
import { FacadeService } from '../state';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit, OnDestroy {
  constructor(private stateFacade: FacadeService, private settingsFacade: SettingsFacade) {}

  isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
  isControlsDisplay$ = this.settingsFacade.isControlsDisplay$;
  words$ = this.stateFacade.words$;
  pagination$ = this.stateFacade.pagination$;
  url = 'https://dispet.github.io/rslang-data/';

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.stateFacade.loadWords().pipe(takeUntil(this.destroy$)).subscribe();
    console.log(this.words$);
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

  playAudio(url1: string, url2: string, url3: string): void {
    const audio1 = new Audio();
    const audio2 = new Audio();
    const audio3 = new Audio();
    audio1.src = this.url+url1;
    audio2.src = this.url+url2;
    audio3.src = this.url+url3;
    audio1.load();
    audio1.play();
    audio1.addEventListener('ended', function() {
      if (audio1.duration === audio1.currentTime) {
        audio2.play();
      }
    });
    audio2.addEventListener('ended', function() {
      if (audio2.duration === audio2.currentTime) {
        audio3.play();
      }
    });
  }
}
