import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { IUsersWords } from 'src/app/shared/models';

@Component({
  selector: 'app-words-in-learning',
  templateUrl: './words-in-learning.component.html',
  styleUrls: ['./words-in-learning.component.scss'],
})
export class WordsInLearningComponent implements OnInit {
  words: Array<IUsersWords>;

  // array = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.getWords(5, 29);
    this.getUserWords();
  }

  // getWords(group: Group, page: Page): void {
  //   this.apiService.getWords(group, page).subscribe((words)=> {
  //     this.array = words;
  //     console.log(this.array);
  //   });
  // }

  getUserWords() {
    this.apiService.getUserWords().subscribe((words) => {
      this.words = words;
      console.log(this.words);
    });
  }
}
