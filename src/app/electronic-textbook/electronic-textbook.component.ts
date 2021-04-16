import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../state';

@Component({
  selector: 'app-electronic-textbook',
  templateUrl: './electronic-textbook.component.html',
  styleUrls: ['./electronic-textbook.component.scss'],
})
export class ElectronicTextbookComponent {
  constructor(private stateFacade: FacadeService) {}
}
