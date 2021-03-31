import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryModule} from "./dictionary";
import {SharedModule, TokenInterceptor} from "./shared";
import {ElectronicTextbookComponent} from './electronic-textbook';
import {LoginComponent} from './auth';
import {RegistrationComponent} from './auth';
import {CoreModule} from "./core";

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
    HttpClientModule,
    AppRoutingModule,
    DictionaryModule,
    SharedModule,
    CoreModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
