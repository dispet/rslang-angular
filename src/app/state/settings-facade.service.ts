import { Injectable } from "@angular/core";
import { ApiService, LocalStorageService } from "../shared";
import { IUserSetting } from "../shared/models";
import { StateService } from "./state.service";

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  constructor(private stateService: StateService, private apiService: ApiService, private localStoage: LocalStorageService) { }

  readonly isTranslationDisplay$ = this.stateService.translationDisplay$;
  readonly isControlsDisplay$ = this.stateService.controlsDisplay$;
  // readonly userSetting$ = this.stateService.userSettings$;

  loadUserSettings() {
    // return this.apiService.getUserSettings().pipe(
    //   tap({
    //     next: (data) => {
    //       console.log(data);
    //       this.stateService.setUserSettings(data);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       alert('Не удалось загрузить настройки пользователя');
    //     }
    //   })
    // )
    const translate = this.localStoage.getTranslateSetting();
    console.log('translate', translate);
    if (translate) {
      this.stateService.setTranslationDisplay(translate);
    } else {
      this.localStoage.createTranslateSetting();
      this.stateService.setTranslationDisplay(this.localStoage.getTranslateSetting());
    }

    const controls = this.localStoage.getControlsSetting();
    console.log('controls', controls);
    if (controls) {
      this.stateService.setControlsDisplay(controls);
    } else {
      this.localStoage.createControlsSetting();
      this.stateService.setControlsDisplay(this.localStoage.getControlsSetting());
    }
  }

  changeTranslateSetting() {
    if(+this.localStoage.getTranslateSetting()) {
      this.localStoage.setTranslateDisplay(0);
    } else {
      this.localStoage.setTranslateDisplay(1);
    }
    this.stateService.setTranslationDisplay(this.localStoage.getTranslateSetting());
  }

  changeControlsSetting() {
    // this.localStoage.getControlsSetting() ? this.localStoage.setControlsSetting(0) : this.localStoage.setControlsSetting(1);
    // this.stateService.setControlsDisplay(this.localStoage.getControlsSetting());
    if(+this.localStoage.getControlsSetting()) {
      this.localStoage.setControlsSetting(0);
    } else {
      this.localStoage.setControlsSetting(1);
    }
    this.stateService.setControlsDisplay(this.localStoage.getControlsSetting());
  }

  setUserSettings(settings: IUserSetting) {
    // const body: IUserSetting = {
    //   wordsPerDay: settings.wordsPerDay,
    //   optional: {
    //     isTranslateDisplay: settings.isTranslateDispaly,
    //     isControlsDisplay: settings.isControlsDisplay,
    //   }
    // }
    this.apiService.setUserSettings(settings);
  }

  // setTranslationDisplay(): void {
  //   this.stateService.setTranslationDisplay();
  // }

  // setControlsDisplay(): void {
  //   this.stateService.setControlsDisplay();
  // }
}
