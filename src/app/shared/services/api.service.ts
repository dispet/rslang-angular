import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {
  IAggregatedWord,
  IUserSetting,
  IUserUpdate,
  IUserUpdateResponse,
  IUsersWords,
  IWord
} from '../models';

import {API_URL} from "../constants";
import {Group, Page} from "../types";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = API_URL;
  private id: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  updateUser(user: IUserUpdate): Observable<IUserUpdateResponse> {
    return this.http.put<IUserUpdateResponse>(`${this.url}/users/${this.id}`, user);
  }

  deleteUser(): Observable<void> {
    return this.http.delete<void>(`${this.url}/users/${this.id}`);
  }

  getWords(group: Group, page: Page): Observable<Array<IWord>> {
    let params = new HttpParams();
    params = params.append('group', group.toString());
    params = params.append('page', page.toString());
    return this.http.get<Array<IWord>>(`${this.url}/words`, {params});
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

  setUserId(id: string): void {
    this.id = id;
  }
}
