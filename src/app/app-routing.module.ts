import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicTextbookComponent } from './electronic-textbook';
import { LoginComponent } from './auth/login';
import { RegistrationComponent } from './auth';
import { MainLayoutComponent } from './core/';
import { PageNotFoundComponent } from './core';
import { HomePageComponent } from './home-page';
import { MiniGamesComponent } from './mini-games';
import { StatisticsComponent } from './statistics';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './shared/services';

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'registration',
		component: RegistrationComponent,
	},
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: HomePageComponent },
			{ path: 'text-book', component: ElectronicTextbookComponent, canActivate: [AuthGuard] },
			{ path: 'mini-games', component: MiniGamesComponent, canActivate: [AuthGuard] },
			{ path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
			{ path: 'about-us', component: AboutUsComponent },
		],
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
