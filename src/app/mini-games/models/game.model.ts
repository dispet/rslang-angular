export interface IGameAnswer {
	isCorrect: boolean;
	answer: {
		answer: string;
		answerTranslate: string;
	};
	audio: string;
}

export interface IGame {
	answers: boolean[];
	heartsCount: string[];
	correctAnswers: string[];
	incorrectAnswers: string[];
	correctAnswersTranslate: string[];
	incorrectAnswersTranslate: string[];
	correctAnswerAudios: string[];
	incorrectAnswerAudios: string[];
}

export interface IGameInfo {
	name: string;
	info: string;
}
