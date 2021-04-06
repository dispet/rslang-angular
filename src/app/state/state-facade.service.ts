import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { ApiService } from "../shared";
import { Group, Page } from "../shared/types";
import { StateService } from "./state.service";
import { switchMap, tap } from 'rxjs/operators';
import { IWord } from "../shared/models";

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(private stateService: StateService, private apiService: ApiService) { }

  readonly groupNumber$ = this.stateService.groupNumber$;
  readonly pageNumber$ = this.stateService.pageNumber$;
  readonly words$ = this.stateService.words$;

  // setGroupNumber(number: Group) {
  //   this.stateService.setGroupNumber(number);
  // }

  pickGroup(number: Group) {
    let prevGroup: Group = this.stateService.getGroupNumberValue();
    this.stateService.setGroupNumber(number);
    this.loadWords()
    .pipe(tap({
      next: words => this.stateService.setWords(words),
      error: error => {
        console.log("Can't load words", error.message);
        this.stateService.setGroupNumber(prevGroup);
      }
    }));
    // this.stateService.loadWords()
    //   .pipe(tap({
    //     next: words => this.stateService.setWords(words),
    //     error: error => {
    //       console.log("Can't load words", error.message);
    //       this.stateService.setGroupNumber(prevGroup);
    //     }
    //   }))
  }



  // setPageNumber(number: Page) {
  //   this.stateService.setPageNumber(number);
  // }

  pickPage(number: Page) {
    let prevPage: Page = this.stateService.getPageNumberValue();
    this.stateService.setPageNumber(number);
    // this.stateService.setWords(this.loadWords())
    this.loadWords()
      .pipe(tap({
        next: words => this.stateService.setWords(words),
        error: error => {
          console.log("Can't load words", error.message);
          this.stateService.setPageNumber(prevPage);
        }
      }));
    // this.stateService.loadWords()
    //   .pipe(tap({
    //     next: words => this.stateService.setWords(words),
    //     error: error => {
    //       console.log("Can't load words", error.message);
    //       this.stateService.setPageNumber(prevPage);
    //     }
    //   }))
  }

  loadWords(): Observable<Array<IWord>> {
    return forkJoin([
      this.groupNumber$, this.pageNumber$
    ]).pipe(switchMap(([
      group, page
    ]) => {
      return this.apiService.getWords(group, page);
    }));
  }
}
