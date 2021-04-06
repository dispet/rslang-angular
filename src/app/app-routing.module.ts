import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/services';

import { ElectronicTextbookComponent } from './electronic-textbook';
import { MainLayoutComponent } from './core/';
import { PageNotFoundComponent } from './core';
import { HomePageComponent } from './home-page';
import { MiniGamesComponent } from './mini-games';
import { StatisticsComponent } from './statistics';
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
    component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'text-book', component: ElectronicTextbookComponent},
      // {path: 'dictionary', loadChildren: "./dictionary/dictionary.module.ts"},
      {path: 'dictionary', loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)},
      {path: 'words-list', loadChildren: () => import('./words-list/words-list.module').then(m => m.WordsListModule)},
      {path: 'mini-games', component: MiniGamesComponent},
      {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
      {path: 'about-us', component: AboutUsComponent}
    ]
  },
  // {path: 'dictionary', loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)},
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
