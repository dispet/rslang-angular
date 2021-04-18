import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsFacade } from '../state/settings-facade.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  isTranslationDisplay$ = this.settingsFacade.isTranslationDisplay$;
  isControlsDisplay$ = this.settingsFacade.isControlsDisplay$;
  // userSettings = this.settingsFacade.userSetting$;
  settings$: Observable<any>;

  constructor(private settingsFacade: SettingsFacade, private location: Location) {}

  ngOnInit(): void {
    // this.loadUserSettings();
    this.settings$ = combineLatest([this.isTranslationDisplay$, this.isControlsDisplay$]).pipe(
      map(([translation, controls]) => {
        return { translation, controls };
      }),
    );

    // this.loadUserSettings();
  }

  // loadUserSettings() {
  //   this.settingsFacade.loadUserSettings();
  // }

  changeTranslationDisplay() {
    this.settingsFacade.changeTranslateSetting();
  }

  changeControlsDisplay() {
    this.settingsFacade.changeControlsSetting();
  }

  // loadUserSettings() {
  //   this.settingsFacade.loadUserSettings().pipe(first()).subscribe();
  // }

  // setTranslationDisplay(): void {
  //   this.settingsFacade.setTranslationDisplay();
  // }

  // setControlsDisplay(): void {
  //   this.settingsFacade.setControlsDisplay();
  // }

  backToPreviousPage() {
    this.location.back();
  }
}
