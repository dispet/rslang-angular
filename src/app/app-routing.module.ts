import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook/electronic-textbook.component";
import {LoginComponent} from "./auth/login";
import {RegisterComponent} from "./auth/register";

const appRoutes: Routes = [
  {
    path: '',
    component: ElectronicTextbookComponent, // main component
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
