import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../shared";
import { Page } from "../shared/types";
import { StateService } from "./state.service";
import { switchMap, tap } from 'rxjs/operators';
import { IWord } from "../shared/models";

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(private stateService: StateService, private apiService: ApiService) { }

  readonly pagination$ = this.stateService.pagination$;
  readonly words$ = this.stateService.words$;

  setGroup(number: number): void {
    this.stateService.setGroupNumber(number);
  }

  setNextPage() {
    this.stateService.setNextPageNumber();
  }

  setPrevPage() {
    this.stateService.setPrevPageNumber();
  }

  setFirstPage() {
    this.stateService.setPageNumber(this.stateService.MIN_PAGE_COUNT as Page);
  }

  setLastPage() {
    this.stateService.setPageNumber(this.stateService.MAX_PAGE_COUNT as Page);
  }

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
