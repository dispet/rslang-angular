import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook";
import {LoginComponent} from "./auth/login";
import {RegistrationComponent} from "./auth";
import {MainLayoutComponent} from "./shared/";
import {PageNotFoundComponent} from "./shared/components/page-not-found";

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: ElectronicTextbookComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
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
