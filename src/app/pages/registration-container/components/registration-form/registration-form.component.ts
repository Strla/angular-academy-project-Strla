import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatch } from 'src/app/validators/password.validator';

export interface IRegistrationFormData {
	email: string;
	password: string;
	password_confirmation: string;
}

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
	@Output() addUser: EventEmitter<IRegistrationFormData> = new EventEmitter();

	public registrationFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			password_confirmation: ['', [Validators.required]],
		},
		{
			validator: PasswordMatch('password', 'password_confirmation'),
		}
	);

	constructor(private fb: FormBuilder) {}

	public onAddUser(): void {
		this.addUser.emit(this.registrationFormGroup.value);
		this.registrationFormGroup.reset();
	}
}
