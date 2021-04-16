import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiService } from '../shared';
import { Group, Page } from '../shared/types';
import { StateService } from './state.service';
import { tap } from 'rxjs/operators';
import { IPagination, IWord } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(private stateService: StateService, private apiService: ApiService) {}

  readonly pagination$ = this.stateService.pagination$;
  readonly words$ = this.stateService.words$;
  isLoadingSubject$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject$.asObservable();

  loadWords(group: number = 1, page: number = 1): Observable<Array<IWord>> {
    const pagination: IPagination = { group: (group - 1) as Group, page: (page - 1) as Page };
    this.isLoadingSubject$.next(true);
    return this.apiService.getWords(pagination.group, pagination.page).pipe(
      tap({
        next: (data) => {
          this.stateService.setWords(data);
        },
        error: (err) => {
          console.error(JSON.stringify(err));
          alert('не удалось загрузить слова');
        },
        complete: () => {
          this.isLoadingSubject$.next(false);
          this.stateService.updatePagination(pagination);
        },
      }),
    );
  }
}
