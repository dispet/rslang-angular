import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from '../../models/savanna-game.model';

@Component({
	selector: 'app-game-results-modal',
	templateUrl: './game-results-modal.component.html',
	styleUrls: ['./game-results-modal.component.scss'],
})
export class GameResultsModalComponent implements OnInit {
	@Input() gameData!: IGame;
	data: IGame;
	currentUrl = this.router.url;

	constructor(private el: ElementRef, private router: Router) {}
	ngOnInit(): void {
		this.data = this.gameData;
	}

	playWordAudio(event: MouseEvent) {
		let button = event.target as Element;
		let currentAudio;
		let idC = Array.from(button.classList).find((className) => className.includes('playAudioButtonForC'));
		let idIn = Array.from(button.classList).find((className) => className.includes('playAudioButtonForIn'));
		let id = (idC || idIn).replace(/\D/g, '');
		if (idIn) {
			currentAudio = this.el.nativeElement.querySelector(`.audioIn${id}`);
		} else {
			currentAudio = this.el.nativeElement.querySelector(`.audioC${id}`);
		}
		currentAudio.play();
	}

	reload() {
		this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
			this.router.navigate([this.currentUrl]);
		});
	}
}
