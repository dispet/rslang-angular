import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElectronicTextbookComponent} from "./electronic-textbook/electronic-textbook.component";
import {LoginComponent} from "./auth/login";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {RegistrationComponent} from "./auth/registration";

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, children: [ // main component
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
