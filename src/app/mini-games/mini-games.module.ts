import { NgModule } from '@angular/core';
import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { AudioCallComponent } from './audiocall/audio-call/audio-call.component';
import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { MiniGamesComponent } from './mini-games.component';
import { ItemAudioCallComponent } from './audiocall/item-audio-call/item-audio-call.component';
import { MainAudioCallComponent } from './audiocall/main-audio-call/main-audio-call.component';
import { RouterModule } from '@angular/router';
import { TypeMeComponent } from './type-me/type-me/type-me.component';
import { ItemTypeMeComponent } from './type-me/item-type-me/item-type-me.component';
import { MainTypeMeComponent } from './type-me/main-type-me/main-type-me.component';

@NgModule({
  declarations: [
    AudioCallComponent,
    MiniGamesComponent,
    ItemAudioCallComponent,
    MainAudioCallComponent,
    TypeMeComponent,
    ItemTypeMeComponent,
    MainTypeMeComponent,
  ],
  imports: [MiniGamesRoutingModule, SharedModule, MaterialModule, RouterModule],
})
export class MiniGamesModule {}
