import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWord } from '../shared/models';
import { Group, Page } from '../shared/types';
import { SettingsFacade } from '../state/settings-facade.service';
import { FacadeService } from '../state/state-facade.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit {

  words$: Observable<Array<IWord>>;
  isTranslationDisplay$: Observable<boolean>;
  isConstrolsDisplay$: Observable<boolean>;
  pageNumber$: Observable<Page>;

  constructor(private stateFacade: FacadeService, private settingsFacade: SettingsFacade) {
    this.words$ = stateFacade.words$;
    this.isTranslationDisplay$ = settingsFacade.isTranslationDisplay$;
    this.isConstrolsDisplay$ = settingsFacade.isConstrolsDisplay$;
    this.pageNumber$ = stateFacade.pageNumber$;
  }

  ngOnInit(): void {
    this.stateFacade.loadWords();
    console.log(this.words$);
  }

  // setGroupNumber(number: Group) {
  //   this.stateFacade.setGroupNumber(number);
  // }

  pickGroup(number: Group) {
    this.stateFacade.pickGroup(number);
  }

}
