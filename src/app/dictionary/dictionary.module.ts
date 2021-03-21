import {NgModule} from "@angular/core";
import {WordsInLearningComponent} from './words-in-learning/words-in-learning.component';
import {HardWordsComponent} from './hard-words/hard-words.component';
import {DeletedWordsComponent} from './deleted-words/deleted-words.component';
import {DictionaryComponent} from "./dictionary.component";
import {DictionaryRoutingModule} from "./dictionary-routing.module";

@NgModule({
  imports: [
    DictionaryRoutingModule
  ],
  declarations: [
    WordsInLearningComponent,
    HardWordsComponent,
    DeletedWordsComponent,
    DictionaryComponent
  ],
  exports: [],
  providers: [],
})
export class DictionaryModule {
}
