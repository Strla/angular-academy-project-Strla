import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-show-review',
	templateUrl: './show-review.component.html',
	styleUrls: ['./show-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewComponent {
	@Input() review: Review;
}
