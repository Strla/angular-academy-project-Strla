import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-rating-component',
	templateUrl: './rating-component.component.html',
	styleUrls: ['./rating-component.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponentComponent {
	@Input() rating: number;
}
