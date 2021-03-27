import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook";
import {LoginComponent} from "./auth/login";
import {RegistrationComponent} from "./auth";
import {MainLayoutComponent} from "./core/";
import {PageNotFoundComponent} from "./core";

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
      {
        path: '',
        component: ElectronicTextbookComponent
      }
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
