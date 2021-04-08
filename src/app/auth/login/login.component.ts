import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { IUserCreate } from '../../shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitted = false;
  authSubscription: Subscription;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // if you are not logged in and try to go to dashboard,
    // you get in url query param loginAgain=true.
    // Then get this url like observable and check this queryParam

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    // to disable button 'submit' if form was already submitted
    this.submitted = true;

    // create user, get user data from UI
    const user: IUserCreate = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    // clean form fields and redirect to admin page
    this.auth.login(user).subscribe(
      () => {
        this.form.reset();
        this.submitted = false;
        this.router.navigate(['text-book']);
      },
      () => (this.submitted = false),
    );
  }
}
