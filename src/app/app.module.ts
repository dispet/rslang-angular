import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';

import { SharedModule, TokenInterceptor } from './shared';
import { DictionaryModule } from './dictionary';
import { LoginModule } from './auth/login/login.module';
import { RegistrationModule } from './auth/registration/registration.module';

import { AppComponent } from './app.component';
import { ElectronicTextbookComponent } from './electronic-textbook';
import { RegistrationComponent } from './auth';
import { HomePageComponent } from './home-page';
import { StatisticsComponent } from './statistics';
import { AboutUsComponent } from './about-us/about-us.component';
import { MiniGamesModule } from './mini-games/mini-games.module';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicTextbookComponent,
    RegistrationComponent,
    HomePageComponent,
    StatisticsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DictionaryModule,
    LoginModule,
    RegistrationModule,
    SharedModule,
    CoreModule,
    MiniGamesModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }],
  bootstrap: [AppComponent],
})
export class AppModule {}
