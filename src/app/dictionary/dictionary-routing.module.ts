import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { DeletedWordsComponent } from "./deleted-words";
import { DictionaryComponent } from "./dictionary.component";
import { HardWordsComponent } from "./hard-words";
import { WordsInLearningComponent } from "./words-in-learning";

const routes: Routes = [
  {path: 'dictionary', component: DictionaryComponent},
  // // children: [
  //   // {path: '', component: WordsInLearningComponent},
  //   // {path: '', component: HardWordsComponent},
  //   // {path: '', component: DeletedWordsComponent},
  // // ],

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class DictionaryRoutingModule {}
