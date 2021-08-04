import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

interface ILayout {
	isSmall: boolean;
}

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
	public layout$: Observable<ILayout> = new Observable<ILayout>();

	constructor(
		breakpointObserver: BreakpointObserver,
		private authService: AuthenticationService,
		private router: Router
	) {
		this.layout$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public logOut(): void {
		this.authService.logOut();
		this.router.navigate(['/login']);
	}
}
