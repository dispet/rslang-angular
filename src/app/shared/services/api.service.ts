import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  IAggregatedWord,
  IAggregatedWordResponse,
  IStatsMiniGames,
  IStatsMiniGamesResponse,
  IUserSetting,
  IUserUpdate,
  IUserUpdateResponse,
  IUsersWords,
  IWord,
} from '../models';

import { API_URL } from '../constants';
import { Group, Page, AggregatedFilter } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = API_URL;
  private id = '';

  constructor(private http: HttpClient) {}

  updateUser(user: IUserUpdate): Observable<IUserUpdateResponse> {
    return this.http.put<IUserUpdateResponse>(`${this.url}/users/${this.id}`, user);
  }

  deleteUser(): Observable<void> {
    return this.http.delete<void>(`${this.url}/users/${this.id}`);
  }

  getWords(group: Group = 0, page: Page = 0): Observable<Array<IWord>> {
    let params = new HttpParams();
    params = params.append('group', group.toString());
    params = params.append('page', page.toString());
    return this.http.get<Array<IWord>>(`${this.url}/words`, { params });
  }

  getUserWords(): Observable<Array<IUsersWords>> {
    return this.http.get<Array<IUsersWords>>(`${this.url}/users/${this.id}/words`);
  }

  createUserWordByWordId(wordId: string, word: IUsersWords): Observable<IUsersWords> {
    return this.http.post<IUsersWords>(`${this.url}/users/${this.id}/words/${wordId}`, word);
  }

  getUserWordByWordId(wordId: string): Observable<IUsersWords> {
    return this.http.get<IUsersWords>(`${this.url}/users/${this.id}/words/${wordId}`);
  }

  updateUserWordByWordId(wordId: string, word: IUsersWords): Observable<IUsersWords> {
    return this.http.put<IUsersWords>(`${this.url}/users/${this.id}/words/${wordId}`, word);
  }

  deleteUserWordByWordId(wordId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/users/${this.id}/words/${wordId}`);
  }

  getUserAggregatedWords(
    filter?: AggregatedFilter,
    wordsPerPage?: number | null,
    group?: number,
  ): Observable<Array<IAggregatedWordResponse>> {
    let params = new HttpParams();

    if (wordsPerPage) {
      params = params.append('wordsPerPage', wordsPerPage.toString());
    }

    if (group) {
      params = params.append('group', group.toString());
    }

    if (filter) {
      params = params.append('filter', JSON.stringify(filter));
    }
    return this.http.get<Array<IAggregatedWordResponse>>(`${this.url}/users/${this.id}/aggregatedWords/`, {
      params,
    });
  }

  getUserAggregatedWordByWordId(wordId: string): Observable<IAggregatedWord> {
    return this.http.get<IAggregatedWord>(`${this.url}/users/${this.id}/aggregatedWords/${wordId}`);
  }

  getUserSettings(): Observable<IUserSetting> {
    return this.http.get<IUserSetting>(`${this.url}/users/${this.id}/settings`);
  }

  updateUserSettings(setting: IUserSetting): Observable<IUserSetting> {
    return this.http.put<IUserSetting>(`${this.url}/users/${this.id}/settings`, setting);
  }

  setUserSettings(settings: IUserSetting): Observable<IUserSetting> {
    return this.http.post<IUserSetting>(`${this.url}/users/${this.id}/settings`, settings);
  }

  getUserStatistics(): Observable<IStatsMiniGamesResponse> {
    return this.http.get<IStatsMiniGamesResponse>(`${this.url}/users/${this.id}/statistics`);
  }

  updateUserStatistics<T extends IStatsMiniGames>(statistic: T): Observable<T> {
    return this.http.put<T>(`${this.url}/users/${this.id}/statistics`, statistic);
  }

  setUserId(id: string): void {
    this.id = id;
  }
}
