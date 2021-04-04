import { Injectable } from '@angular/core';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/shared';
import { IWord } from 'src/app/shared/models/word.model';

@Injectable({
	providedIn: 'root',
})
export class SavannaService {
	wordsObj = {
		Испуганный: 'Afraid',
		Соглашаться: 'Agree',
		Сердитый: 'Angry',
		Прибывать: 'Arrive',
		Атаковать: 'Attack',
		Низ: 'Bottom',
		Умный: 'Clever',
		Жестокий: 'Cruel',
		'В конце концов': 'Finally',
		Прятаться: 'Hide',
		'Охотиться (обычно с гончими)': 'Hunt',
		Много: 'Lot',
		Середина: 'Middle',
		Момент: 'Moment',
		Довольный: 'Pleased',
		Обещать: 'Promise',
		Отвечать: 'Reply',
		Безопасный: 'Safe',
		Уловка: 'Trick',
		Хорошо: 'Well',
	};

	russianWords = Object.keys(this.wordsObj);
	englishWords = Object.values(this.wordsObj);
	apiWords = this.apiService.getWords(1, 1).pipe(
		map((response: IWord[]) => {
			const wordsArray: any[] = response.map((el) => {
				return {
					wordId: el._id,
					foreignWord: el.word,
					nativeWord: el.wordTranslate,
					audioUrl: el.audio,
				};
			});

			return wordsArray;
		}),
		catchError((err) => {
			console.warn('ERROR: ', err);
			return err;
		}),
		shareReplay(),
	);
	constructor(private apiService: ApiService) {}
}
