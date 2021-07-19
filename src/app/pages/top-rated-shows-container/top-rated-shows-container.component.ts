import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-top-rated-shows-container',
	templateUrl: './top-rated-shows-container.component.html',
	styleUrls: ['./top-rated-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedShowsContainerComponent {
	public shows: Array<Show>;

	public shows$: Observable<Array<Show>> = this.showService.getTopRated();

	constructor(private showService: ShowService) {}
}
