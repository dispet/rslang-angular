import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '../settings';
import { WordsListComponent } from './words-list.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent},
  { path: '', component: WordsListComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsListRoutingModule { }
