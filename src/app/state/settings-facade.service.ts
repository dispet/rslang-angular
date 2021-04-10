import { Injectable } from "@angular/core";
import { StateService } from "./state.service";

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  constructor(private stateService: StateService) {}

  readonly isTranslationDisplay$ = this.stateService.translationDisplay$;
  readonly isConstrolsDisplay$ = this.stateService.controlsDisplay$;

  setTranslationDisplay(): void {
    this.stateService.setTranslationDisplay();
  }

  setControlsDisplay(): void {
    this.stateService.setControlsDisplay();
  }
}
