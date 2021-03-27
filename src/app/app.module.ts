import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryModule} from "./dictionary";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule, TokenInterceptor } from "./shared";
import { ElectronicTextbookComponent } from './electronic-textbook';
import { LoginComponent } from './auth/login';
import { RegistrationComponent } from './auth/registration';
import { CoreModule } from "./core";
import { HomePageComponent } from './home-page/home-page.component';
import { MiniGamesComponent } from './mini-games/mini-games.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    ElectronicTextbookComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    MiniGamesComponent,
    StatisticsComponent,
    AboutUsComponent,
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
