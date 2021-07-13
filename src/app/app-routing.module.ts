import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: AllShowsContainerComponent },
			//{ path: 'most-upvoted', component: MostUpvotedContainerComponent },
			//{ path: 'post/:id', component: PostDetailsContainerComponent },
		],
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
