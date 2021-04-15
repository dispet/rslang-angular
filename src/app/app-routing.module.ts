import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared';

import { ElectronicTextbookComponent } from './electronic-textbook';
import { MainLayoutComponent } from './core/';
import { PageNotFoundComponent } from './core';
import { HomePageComponent } from './home-page';
import { MiniGamesComponent } from './mini-games';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/registration/registration.module').then((m) => m.RegistrationModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'text-book', component: ElectronicTextbookComponent },
      { path: 'mini-games', component: MiniGamesComponent },
      {
        path: 'statistics',
        canActivate: [AuthGuard],
        loadChildren: () => import('./statistics/statistics.module').then((m) => m.StatisticsModule),
      },
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
