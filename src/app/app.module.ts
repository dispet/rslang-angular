// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryModule } from './dictionary';
import { SharedModule, TokenInterceptor } from './shared';
import { CoreModule } from './core';
import { MiniGamesModule } from './mini-games/mini-games.module';

// Components
import { AppComponent } from './app.component';
import { ElectronicTextbookComponent } from './electronic-textbook';
import { LoginComponent } from './auth';
import { RegistrationComponent } from './auth';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
		DictionaryModule,
		SharedModule,
		CoreModule,
		AppRoutingModule,
		MiniGamesModule,
	],
	providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }],
	bootstrap: [AppComponent],
})
export class AppModule {}
