import { Injectable } from '@angular/core';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models/word.model';
import { Group } from 'src/app/shared/types';

@Injectable({
	providedIn: 'root',
})
export class SavannaService {
	responseReached = false;
	choosenGroup = 1 as Group;
	randomPage = Math.floor(Math.random() * 20) as Group;
	responseWords!: IWord[];
	constructor(private apiService: ApiService) {}

	getChoosenWords() {
		this.apiService.getWords(this.choosenGroup, this.randomPage).subscribe((response) => {
			this.responseWords = response;
			console.log(this.choosenGroup, this.randomPage, this.responseWords.length);
			this.responseReached = true;
		});
	}
}
