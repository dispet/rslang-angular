import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '../settings';
import { WordsListComponent } from './words-list.component';

const routes: Routes = [
  { path: '', component: WordsListComponent },
  { path: 'settings', component: SettingsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsListRoutingModule { }
