import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StateService } from "./state.service";

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  constructor(private stateService: StateService) {}

  readonly isTranslationDisplay$ = this.stateService.translationDisplay$;
  readonly isConstrolsDisplay$ = this.stateService.controlsDisplay$;

  setTranslationDisplay(flag: boolean) {
    this.stateService.setTranslationDisplay(flag);
  }

  setControlsDisplay(flag: boolean) {
    this.stateService.setControlsDisplay(flag);
  }
}
