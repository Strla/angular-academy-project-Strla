import { FormGroup } from '@angular/forms';

export function PasswordMatch(password: string, passwordConfirmed: string) {
	return (formGroup: FormGroup) => {
		const firstPassword = formGroup.controls[password];
		const secondPassword = formGroup.controls[passwordConfirmed];

		if (secondPassword.errors && !secondPassword.errors.mustMatch) {
			return;
		}

		if (firstPassword.value !== secondPassword.value) {
			secondPassword.setErrors({ mustMatch: true });
		} else {
			secondPassword.setErrors(null);
		}
	};
}
