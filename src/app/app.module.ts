import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryModule } from './dictionary';
import { SharedModule, TokenInterceptor } from './shared';
import { ElectronicTextbookComponent } from './electronic-textbook';
import { LoginComponent } from './auth';
import { RegistrationComponent } from './auth';
import { CoreModule } from './core';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MiniGamesModule } from './mini-games/mini-games.module';

@NgModule({
	declarations: [
		AppComponent,
		ElectronicTextbookComponent,
		LoginComponent,
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
		MiniGamesModule,
		SharedModule,
		CoreModule,
	],
	providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }],
	bootstrap: [AppComponent],
})
export class AppModule {}
