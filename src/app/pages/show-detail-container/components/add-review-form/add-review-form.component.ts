import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';

export interface IReviewFormData {
	comment: string;
	rating: string;
}

@Component({
	selector: 'app-add-review-form',
	templateUrl: './add-review-form.component.html',
	styleUrls: ['./add-review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewFormComponent {
	@Output() postReview: EventEmitter<IReviewFormData> = new EventEmitter();

	constructor(private fb: FormBuilder) {}

	public onReviewPost(): void {
		this.postReview.emit(this.addReviewFormGroup.value);
		this.addReviewFormGroup.reset();
	}
	public addReviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required]],
	});

	onRate($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
		this.addReviewFormGroup.patchValue({
			rating: $event.newValue,
		});
	}
}
