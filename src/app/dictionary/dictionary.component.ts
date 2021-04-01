import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  dictionarySection = 'app-words-in-learning';

  constructor() { }

  ngOnInit(): void {
  }

}
