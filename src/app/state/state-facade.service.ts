import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  readonly group = this.stateService.groupNumber$;
  readonly page = this.stateService.pageNumber$;
  readonly words$ = this.stateService.words$;

  readonly FIRST_PAGE = 0;
  readonly LAST_PAGE = 29;

  setGroup(number: number): void {
    this.stateService.setGroupNumber(number);
    // let prevGroup: Group = this.stateService.getGroupNumberValue();
    // this.stateService.setGroupNumber(number);

    // this.stateService.loadWords()
    //   .pipe(tap({
    //     next: words => this.stateService.setWords(words),
    //     error: error => {
    //       console.log("Can't load words", error.message);
    //       this.stateService.setGroupNumber(prevGroup);
    //     }
    //   }))
  }

  setNextPage() {
    this.stateService.setNextPageNumber();
  }

  setPrevPage() {
    this.stateService.setPrevPageNumber();
  }

  setFirstPage() {
    this.stateService.setPageNumber(this.FIRST_PAGE as Page);
  }

  setLastPage() {
    this.stateService.setPageNumber(this.LAST_PAGE as Page);
  }

  // pickPage(number: Page) {
    // let prevPage: Page = this.stateService.getPageNumberValue();
    // this.stateService.setPageNumber(number);

    // this.stateService.loadWords()
    //   .pipe(tap({
    //     next: words => this.stateService.setWords(words),
    //     error: error => {
    //       console.log("Can't load words", error.message);
    //       this.stateService.setPageNumber(prevPage);
    //     }
    //   }))
  // }

  loadWords(): Observable<Array<IWord>> {
    return this.stateService.pagination$.pipe(
      switchMap(({ page, group }) => {
        return this.apiService.getWords(group, page);
      }),
      tap({
        next: (data) => {
          this.stateService.setWords(data);
        },
        error: (err) => {
          console.error(JSON.stringify(err));
        },
      }),
    );
  }
}
