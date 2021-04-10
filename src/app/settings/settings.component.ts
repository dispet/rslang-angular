import {Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Subject } from 'rxjs';
import { SettingsFacade } from '../state/settings-facade.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('toggler') toggler: MatSlideToggle;

  isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
  isControlsDisplay$ = this.settingsFacade.isConstrolsDisplay$;

  private destroy$ = new Subject<void>();

  constructor(private settingsFacade: SettingsFacade) { }

  ngOnInit(): void {
  }

  setTranslationDisplay(): void {
    this.settingsFacade.setTranslationDisplay();
  }

  setControlsDisplay(): void {
    this.settingsFacade.setControlsDisplay();
  }
}
