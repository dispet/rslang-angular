import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "../shared";
import { Group, Page } from "../shared/types";
import { StateService } from "./state.service";
import { find, first, tap } from 'rxjs/operators';
import { IPagination, IUsersWords, IWord } from "../shared/models";

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(private stateService: StateService, private apiService: ApiService) {}

  readonly pagination$ = this.stateService.pagination$;
  readonly listWords$ = this.stateService.listWords$;
  readonly userWords$ = this.stateService.userWords$;
  readonly wordsInLearning$ = this.stateService.wordsInLearning$;
  isLoadingSubject$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject$.asObservable();

  loadListWords(group: number = 1, page: number = 1, direction: string): Observable<Array<IWord>> {
    const pagination: IPagination = { group: group - 1 as Group, page: page - 1 as Page };
    this.isLoadingSubject$.next(true);
    return this.apiService.getWords(pagination.group, pagination.page).pipe(
      tap({
        next: (data) => {
          console.log(data);
          this.stateService.setWords(data, direction);
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

  loadUserWords() {
    return this.apiService.getUserWords().pipe(
      tap({
        next: (data) => {
          console.log(data);
          this.stateService.setWords(data, 'user');
        },
        error: (err) => {
          console.error(JSON.stringify(err));
          alert('не удалось загрузить слова пользователя');
        }
      })
    )
  }

  addWordWithParams(id: string, body: IUsersWords) {
    this.apiService.createUserWordByWordId(id, body)
    .pipe(first())
    .subscribe(data => data);
  }

  updateWordParams(id: string, body: IUsersWords) {
    this.apiService.updateUserWordByWordId(id, body)
      .pipe(first())
      .subscribe(data => data);
  }

  addWordToHard(id: string): void {
    const body: IUsersWords = {
      difficulty: 'hard',
      optional: {
        hard: true
      }
    };
    let words: IUsersWords[];
    this.userWords$.pipe(
      tap({
        next: (data) => {
          words = data;
        }
      }), first()
    ).subscribe();
    console.log(words.findIndex(word => word.wordId === id));
    if (words.findIndex(word => word.wordId === id) > 1) {
      this.updateWordParams(id, body);
    } else {
      this.addWordWithParams(id, body);
    }
  }

  addWordToDeleted(id: string): void {
    const body: IUsersWords = {
      difficulty: 'normal',
      optional: {
        deleted: true
      }
    };
    if (!this.userWords$.pipe(find((word) => (word as any).wordId === id))) {
      this.addWordWithParams(id, body);
    } else {
      this.updateWordParams(id, body);
    }
  }
}
