import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGameAnswers } from '../../models/game.model';

@Component({
	selector: 'app-game-results-modal',
	templateUrl: './game-results-modal.component.html',
	styleUrls: ['./game-results-modal.component.scss'],
})
export class GameResultsModalComponent implements OnInit {
	@Input() data!: IGameAnswers;
	currentUrl = this.router.url;
	correct: number;
	incorrect: number;

	constructor(private el: ElementRef, private router: Router) {}
	ngOnInit(): void {
		this.correct = this.data.correctAnswers.length;
		this.incorrect = this.data.incorrectAnswers.length;
	}

	playWordAudio(audio: HTMLAudioElement) {
		audio.play();
	}

	reload() {
		this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
			this.router.navigate([this.currentUrl]);
		});
	}
}
