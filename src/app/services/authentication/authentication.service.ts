import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginFormData } from 'src/app/pages/login-container/components/login-form/login-form.component';
import { IRegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor(private http: HttpClient) {}

	public onRegister(userData: IRegistrationFormData): Observable<IRegistrationFormData> {
		return this.http.post<IRegistrationFormData>('https://tv-shows.infinum.academy/users', userData);
	}

	public onLogin(loginData: ILoginFormData): Observable<ILoginFormData> {
		return this.http.post<ILoginFormData>('https://tv-shows.infinum.academy/users/sign_in', loginData);
	}
}
