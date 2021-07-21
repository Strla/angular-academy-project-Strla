import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/internal/operators';
import { ShowService } from 'src/app/services/show/show.service';
import { IRegistrationFormData } from './components/registration-form/registration-form.component';

@Component({
	selector: 'app-registration-container',
	templateUrl: './registration-container.component.html',
	styleUrls: ['./registration-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationContainerComponent {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(private showService: ShowService, private router: Router) {}

	public onRegister(registerFormData: IRegistrationFormData): void {
		this.isLoading$.next(true);
		this.showService
			.onRegister(registerFormData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				})
			)
			.subscribe(() => {
				this.router.navigate(['']);
			});
	}
}
