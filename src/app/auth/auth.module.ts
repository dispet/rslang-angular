import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [],
  providers: [],
})
export class AuthModule {}
