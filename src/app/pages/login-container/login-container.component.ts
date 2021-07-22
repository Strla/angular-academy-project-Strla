import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/internal/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ILoginFormData } from './components/login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private _snackbar: MatSnackBar
	) {}

	public onLogin(loginFormData: ILoginFormData): void {
		this.isLoading$.next(true);
		this.authenticationService
			.onLogin(loginFormData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				}),
				catchError((error) => {
					this._snackbar.open('Invalid password');
					throw new Error(error);
				})
			)
			.subscribe((data) => {
				console.log(data);
				this.router.navigate(['']);
			});
	}
}
