import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models/word.model';
import { Group } from 'src/app/shared/types';
import { IGame } from '../models/game.model';

@Injectable({
	providedIn: 'root',
})
export class SavannaService {
	constructor(private apiService: ApiService) {}
}
