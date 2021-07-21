import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { RatingComponentComponent } from './components/rating-component/rating-component.component';
import { ReviewListComponent } from './pages/show-detail-container/components/review-list/review-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowDetailComponent } from './pages/show-detail-container/components/show-detail/show-detail.component';
import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowReviewComponent } from './pages/show-detail-container/components/show-review/show-review.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		MainLayoutComponent,
		RatingComponentComponent,
		ReviewListComponent,
		ShowCardComponent,
		ShowDetailComponent,
		ShowDetailContainerComponent,
		ShowListComponent,
		ShowReviewComponent,
		SidenavComponent,
		TopRatedShowsContainerComponent,
		FormLayoutComponent,
		RegistrationContainerComponent,
		LoginContainerComponent,
		LoginFormComponent,
		RegistrationFormComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatProgressBarModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
