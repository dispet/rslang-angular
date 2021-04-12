import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from '../../models/savanna-game.model';

@Component({
	selector: 'app-game-results-modal',
	templateUrl: './game-results-modal.component.html',
	styleUrls: ['./game-results-modal.component.scss'],
})
export class GameResultsModalComponent implements OnInit {
	@Input() data!: IGame;
	currentUrl = this.router.url;

	constructor(private el: ElementRef, private router: Router) {}
	ngOnInit(): void {}

	playWordAudio(audio: HTMLAudioElement) {
		audio.play();
	}

	reload() {
		this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
			this.router.navigate([this.currentUrl]);
		});
	}
}
