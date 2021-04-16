import { Component } from '@angular/core';

@Component({
  selector: 'app-deleted-words',
  templateUrl: './deleted-words.component.html',
  styleUrls: ['./deleted-words.component.scss'],
})
export class DeletedWordsComponent {
  words = [];
  constructor() {}
}
