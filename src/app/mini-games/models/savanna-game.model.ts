export interface IGameAnswer {
	isCorrect: boolean;
	choosenOption: string;
}

export interface IGame {
	answers: boolean[];
	heartsCount: string[];
	correctAnswers: string[];
	incorrectAnswers: string[];
}
