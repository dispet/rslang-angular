import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { AudioCallComponent } from './audiocall/audio-call.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { MiniGamesComponent } from './mini-games.component';
import { ItemAudioCallComponent } from './audiocall/item-audio-call/item-audio-call.component';

@NgModule({
  declarations: [AudioCallComponent, MiniGamesComponent, ItemAudioCallComponent],
  imports: [CommonModule, MiniGamesRoutingModule, SharedModule, MaterialModule],
})
export class MiniGamesModule {}
