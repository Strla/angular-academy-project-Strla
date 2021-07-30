import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RatingComponentComponent } from './components/rating-component/rating-component.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { ReviewListComponent } from './pages/show-detail-container/components/review-list/review-list.component';
import { ShowDetailComponent } from './pages/show-detail-container/components/show-detail/show-detail.component';
import { ShowReviewComponent } from './pages/show-detail-container/components/show-review/show-review.component';
import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { AddReviewFormComponent } from './pages/show-detail-container/components/add-review-form/add-review-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		FormLayoutComponent,
		LoginContainerComponent,
		LoginFormComponent,
		MainLayoutComponent,
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
		AddReviewFormComponent,
		LogoComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		ReactiveFormsModule,
		MatSnackBarModule,
		LayoutModule,
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
