import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

interface ITemplateData {
	allShows: Array<Show>;
	topRated: Array<Show>;
}
@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	public shows: Array<Show>;

	public shows$: Observable<Array<Show>> = this.showService.getShows();
	public topRated$: Observable<Array<Show>> = this.showService.getTopRated();

	public templateData$: Observable<ITemplateData> = combineLatest([this.shows$, this.topRated$]).pipe(
		map(([shows, topRated]) => {
			return {
				allShows: shows,
				topRated,
			};
		}),
		tap(console.log)
	);

	constructor(private showService: ShowService) {}
}
