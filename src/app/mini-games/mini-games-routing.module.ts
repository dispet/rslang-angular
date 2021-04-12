import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniGamesComponent } from './mini-games.component';
import { AudioCallComponent } from './audiocall/audio-call.component';

const routes: Routes = [
  { path: '', component: MiniGamesComponent },
  { path: 'audio-call', component: AudioCallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniGamesRoutingModule {}
