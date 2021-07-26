import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { AuthData } from 'src/app/interfaces/auth-data.interface';
import { ILoginFormData } from 'src/app/pages/login-container/components/login-form/login-form.component';
import { IRegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';
import { StorageService } from '../storage/storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private readonly authDataKey = 'authData';

	public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));

	constructor(private http: HttpClient, private storage: StorageService) {}

	public onRegister(userData: IRegistrationFormData): Observable<IRegistrationFormData> {
		return this.http.post<IRegistrationFormData>('https://tv-shows.infinum.academy/users', userData);
	}

	public onLogin(loginData: ILoginFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginData, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const token: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');
					const uid: string | null = response.headers.get('uid');

					if (token && client && uid) {
						this.saveAuthData({ token, client, uid });
						this.isLoggedIn$.next(true);
					}
				})
			);
	}

	public getAuthData(): AuthData | null {
		return this.storage.get(this.authDataKey);
	}

	private saveAuthData(authData: AuthData): void {
		this.storage.add(this.authDataKey, authData);
	}
}
