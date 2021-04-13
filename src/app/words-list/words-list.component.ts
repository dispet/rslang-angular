import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { SettingsFacade } from '../state/settings-facade.service';
import { FacadeService } from '../state';
import { ActivatedRoute, Router } from '@angular/router';
import { DATA_URL } from '../shared/constants/';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit, OnDestroy {
  constructor(private stateFacade: FacadeService, private settingsFacade: SettingsFacade, private route: ActivatedRoute, private router: Router) {
  }

  isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
  isControlsDisplay$ = this.settingsFacade.isControlsDisplay$;
  words$ = this.stateFacade.words$;
  pagination$ = this.stateFacade.pagination$;
  url = DATA_URL;

  private destroy$ = new Subject<void>();

  private subscription: Subscription;
  group: number;
  page: number;

  readonly MAX_GROUP_COUNT = 6;
  readonly MIN_GROUP_COUNT = 1;
  readonly MAX_PAGE_COUNT = 30;
  readonly MIN_PAGE_COUNT = 1;

  ngOnInit(): void {
    this.loadDataFromRoute();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  pickGroup(group: number): void {
    this.router.navigate(['words-list', group, 1]);
  }

  isFirstPage(): boolean {
    return +this.page === this.MIN_PAGE_COUNT;
  }

  isLastPage(): boolean {
    return +this.page === this.MAX_PAGE_COUNT;
  }

  nextPage(): void {
    if (!this.isLastPage()) {
      this.router.navigate(['words-list', this.group, +this.page + 1]);
    }
  }

  prevPage(): void {
    if(!this.isFirstPage()) {
      this.router.navigate(['words-list', this.group, +this.page - 1]);
    }
  }

  firstPage(): void {
    this.router.navigate(['words-list', this.group, this.MIN_PAGE_COUNT]);
  }

  lastPage(): void {
    this.router.navigate(['words-list', this.group, this.MAX_PAGE_COUNT]);
  }

  setRouteValuesInWrongCase() {
    this.router.navigate(['words-list', this.MIN_GROUP_COUNT, this.MIN_PAGE_COUNT]);
  }

  loadDataFromRoute() {
    this.route.params.pipe(switchMap((params) => {
      if (+params['group'] < this.MIN_GROUP_COUNT && +params['group'] > this.MAX_GROUP_COUNT && +params['page'] < this.MIN_PAGE_COUNT && +params['page'] > this.MAX_PAGE_COUNT) {
        this.group = this.MIN_GROUP_COUNT;
        this.page = this.MIN_PAGE_COUNT;
        this.setRouteValuesInWrongCase();
      } else {
        this.group = params['group'];
        this.page = params['page'];
        return this.stateFacade.loadWords(this.group, this.page);
      }
    }), takeUntil(this.destroy$)).subscribe();
  }

  playAudio(url1: string, url2: string, url3: string): void {
    const audio1 = new Audio();
    const audio2 = new Audio();
    const audio3 = new Audio();
    audio1.src = this.url + url1;
    audio2.src = this.url + url2;
    audio3.src = this.url + url3;
    audio1.load();
    audio1.play();
    audio1.addEventListener('ended', function () {
      if (audio1.duration === audio1.currentTime) {
        audio2.play();
      }
    });
    audio2.addEventListener('ended', function () {
      if (audio2.duration === audio2.currentTime) {
        audio3.play();
      }
    });
  }
}
