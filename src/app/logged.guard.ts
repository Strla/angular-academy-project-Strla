import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { AuthenticationService } from './services/authentication/authentication.service';

@Injectable({
	providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
	constructor(private authService: AuthenticationService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authService.isLoggedIn$.pipe(
			map((isLoggedIn: boolean) => {
				if (isLoggedIn) {
					this.router.navigate(['']);
					return false;
				} else {
					return true;
				}
			})
		);
	}
}
