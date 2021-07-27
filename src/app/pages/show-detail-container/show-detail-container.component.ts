import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/internal/operators';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { IReviewFormData } from './components/add-review-form/add-review-form.component';

interface ITemplateData {
	show: Show;
	reviews: Array<Review>;
}

@Component({
	selector: 'app-show-detail-container',
	templateUrl: './show-detail-container.component.html',
	styleUrls: ['./show-detail-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailContainerComponent {
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {}

	private show$: Observable<Show | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (id) {
				return this.showService.getShow(id);
			}

			return of(null);
		})
	);

	private reviews$: Observable<Array<Review> | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (id) {
				return this.reviewService.getAllReviews(id);
			}

			return of(null);
		})
	);

	public templateData$: Observable<ITemplateData> = combineLatest([this.show$, this.reviews$]).pipe(
		map(([show, reviews]) => {
			return {
				show,
				reviews,
			};
		}),
		tap(console.log)
	);

	public onPostReview(reviewFormData: IReviewFormData): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');

		this.reviewService.createReview(reviewFormData, id).subscribe();
	}
}
