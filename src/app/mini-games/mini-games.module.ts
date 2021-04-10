import { NgModule } from '@angular/core';
import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { SavannaComponent } from './savanna/savanna.component';
import { SharedModule } from '../shared';
import { MiniGamesComponent } from './mini-games.component';
import { SavannaChildComponent } from './savanna/savanna-child/savanna-child.component';
import { GameResultsModalComponent } from './components/game-results-modal/game-results-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameFirstModalComponent } from './components/game-first-modal/game-first-modal.component';

@NgModule({
	declarations: [SavannaComponent, MiniGamesComponent, SavannaChildComponent, GameResultsModalComponent, GameFirstModalComponent],
	imports: [MiniGamesRoutingModule, SharedModule],
	entryComponents: [GameResultsModalComponent],
	providers: [
		{ provide: MAT_DIALOG_DATA, useValue: {} },
		{ provide: MatDialogRef, useValue: {} },
	],
})
export class MiniGamesModule {}
