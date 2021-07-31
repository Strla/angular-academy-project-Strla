import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoggedGuard } from './logged.guard';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { ProfileContainerComponent } from './pages/profile-container/profile-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: AllShowsContainerComponent },
			{ path: 'top-rated', component: TopRatedShowsContainerComponent },
			{ path: 'show/:id', component: ShowDetailContainerComponent },
			{ path: 'my-profile', component: ProfileContainerComponent },
		],
		canActivate: [AppGuard],
	},
	{
		path: '',
		component: FormLayoutComponent,
		children: [
			{
				path: 'registration',
				component: RegistrationContainerComponent,
			},
			{
				path: 'login',
				component: LoginContainerComponent,
			},
		],
		canActivate: [LoggedGuard],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
