import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of, Subject, throwError } from 'rxjs';
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

	public templateData$: Observable<ITemplateData> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (!id) {
				return throwError('no id!');
			}

			return combineLatest([this.showService.getShow(id), this.reviewService.getAllReviews(id)]);
		}),
		map(([show, reviews]) => {
			return { show, reviews };
		})
	);

	public onPostReview(reviewFormData: IReviewFormData): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');
		this.reviewService.createReview(reviewFormData, id).subscribe();
	}
}
