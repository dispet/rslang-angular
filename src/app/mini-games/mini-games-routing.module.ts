import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniGamesComponent } from './mini-games.component';
import { SavannaComponent } from './savanna/savanna.component';

const routes: Routes = [
	{ path: '', component: MiniGamesComponent },
	{ path: 'savanna', component: SavannaComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MiniGamesRoutingModule {}
