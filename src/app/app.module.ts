import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddReviewFormComponent } from './pages/show-detail-container/components/add-review-form/add-review-form.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { EmailComponent } from './components/email/email.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileContainerComponent } from './pages/profile-container/profile-container.component';
import { RatingComponentComponent } from './components/rating/rating-component.component';
import { RatingModule } from 'ng-starrating';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { ReviewListComponent } from './pages/show-detail-container/components/review-list/review-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowDetailComponent } from './pages/show-detail-container/components/show-detail/show-detail.component';
import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowReviewComponent } from './pages/show-detail-container/components/show-review/show-review.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';

@NgModule({
	declarations: [
		AddReviewFormComponent,
		AllShowsContainerComponent,
		AppComponent,
		DropZoneComponent,
		EmailComponent,
		FormLayoutComponent,
		LoginContainerComponent,
		LoginFormComponent,
		LogoComponent,
		MainLayoutComponent,
		ProfileContainerComponent,
		RatingComponentComponent,
		RegistrationContainerComponent,
		RegistrationFormComponent,
		ReviewListComponent,
		ShowCardComponent,
		ShowDetailComponent,
		ShowDetailContainerComponent,
		ShowListComponent,
		ShowReviewComponent,
		SidenavComponent,
		TopRatedShowsContainerComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		LayoutModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSnackBarModule,
		RatingModule,
		ReactiveFormsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
