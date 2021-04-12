import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/shared/types';

@Component({
	selector: 'app-game-first-modal',
	templateUrl: './game-first-modal.component.html',
	styleUrls: ['./game-first-modal.component.scss'],
})
export class GameFirstModalComponent implements OnInit {
	@Output() passGameLevel = new EventEmitter<Group>();
	difficultyGroups = [1, 2, 3, 4, 5, 6];

	constructor() {}

	ngOnInit(): void {}

	chooseGameLevel(group: Number) {
		this.passGameLevel.emit((+group - 1) as Group);
	}
}
