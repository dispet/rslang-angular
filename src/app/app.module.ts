import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryModule} from "./dictionary";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {ElectronicTextbookComponent} from './electronic-textbook';
import {LoginComponent} from './auth/login';
import {RegistrationComponent} from './auth/registration';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicTextbookComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DictionaryModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
