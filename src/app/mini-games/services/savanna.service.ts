import { Injectable } from '@angular/core';

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
	constructor() {}
}
