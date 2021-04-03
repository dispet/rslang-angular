import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { SavannaComponent } from './savanna/savanna.component';
import { SharedModule } from '../shared';
import { MiniGamesComponent } from './mini-games.component';
import { SavannaChildComponent } from './savanna/savanna-child/savanna-child.component';

@NgModule({
	declarations: [SavannaComponent, MiniGamesComponent, SavannaChildComponent],
	imports: [ MiniGamesRoutingModule, SharedModule],
})
export class MiniGamesModule {}
