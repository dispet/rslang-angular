import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook";
import {LoginComponent} from "./auth/login";
import {RegistrationComponent} from "./auth";
import {MainLayoutComponent} from "./core/";
import {PageNotFoundComponent} from "./core";
import { HomePageComponent } from './home-page';
import { MiniGamesComponent } from './mini-games';
import { StatisticsComponent } from './statistics';
import { AboutUsComponent } from './about-us/about-us.component';

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
    component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'text-book', component: ElectronicTextbookComponent},
      {path: 'mini-games', component: MiniGamesComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'about-us', component: AboutUsComponent}
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
