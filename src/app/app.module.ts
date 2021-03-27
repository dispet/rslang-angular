import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryModule} from "./dictionary";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared";
import {ElectronicTextbookComponent} from './electronic-textbook';
import {LoginComponent} from './auth/login';
import {RegistrationComponent} from './auth/registration';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicTextbookComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DictionaryModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
