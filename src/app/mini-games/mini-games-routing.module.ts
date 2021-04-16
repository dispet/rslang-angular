import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniGamesComponent } from './mini-games.component';
import { AudioCallComponent } from './audiocall/audio-call/audio-call.component';
import { MainAudioCallComponent } from './audiocall/main-audio-call/main-audio-call.component';

const routes: Routes = [
  { path: 'audio-call', component: MainAudioCallComponent },
  { path: 'audio-call/:group', component: AudioCallComponent },
  { path: 'audio-call/:group/:page', component: AudioCallComponent },
  { path: '', component: MiniGamesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniGamesRoutingModule {}
