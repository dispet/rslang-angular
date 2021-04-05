import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUserCreate } from '../../shared/models';
import { MismatchValidator } from './password.validator';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
	form: FormGroup;
	submitted = false;
	message: string;

	constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.initForm();
		this.setValidators();
	}

	initForm(): void {
		this.form = new FormGroup({
			email: new FormControl(null, [Validators.email, Validators.required]),
			password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
			confirmPassword: new FormControl(null),
		});
	}

	setValidators(): void {
		console.log('set');
		const formValidators = {
			confirmPassword: Validators.compose([Validators.required, MismatchValidator.mismatch(this.form.get('password'))]),
		};

		this.form.get('confirmPassword').setValidators(formValidators['confirmPassword']);
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
		this.auth.register(user).subscribe(
			() => {
				this.form.reset();
				this.submitted = false;
				this.router.navigate(['login']);
			},
			() => (this.submitted = false),
		);
	}
}
