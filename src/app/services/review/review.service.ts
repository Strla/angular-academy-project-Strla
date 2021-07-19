import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';

import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private rawData: Array<IRawReview> = [
		{
			id: '1',
			showID: '1',
			rating: 4,
			comment: 'Very good',
		},
		{
			id: '2',
			showID: '1',
			rating: 5,
			comment: 'Excellent',
		},
		{
			id: '3',
			showID: '1',
			rating: 4,
			comment: 'Thrilling',
		},
		{
			id: '4',
			showID: '2',
			rating: 3,
			comment: 'Meh',
		},
		{
			id: '5',
			showID: '3',
			rating: 4,
			comment: 'Entertaining',
		},
		{
			id: '6',
			showID: '4',
			rating: 4,
			comment: 'Unreal',
		},
		{
			id: '7',
			showID: '5',
			rating: 5,
			comment: 'Creative',
		},
		{
			id: '8',
			showID: '5',
			rating: 2,
			comment: 'Boring',
		},
		{
			id: '9',
			showID: '5',
			rating: 4,
			comment: 'Very good',
		},
		{
			id: '10',
			showID: '6',
			rating: 3,
			comment: 'Dull',
		},
		{
			id: '11',
			showID: '6',
			rating: 2,
			comment: 'Very boring',
		},
		{
			id: '12',
			showID: '7',
			rating: 4,
			comment: 'Super',
		},
	];

	private get reviews(): Array<Review> {
		return this.rawData.map((rawReviewData: IRawReview) => {
			return new Review(rawReviewData);
		});
	}

	public getReviews(): Observable<Array<Review>> {
		return of(this.reviews).pipe(delay(500 + Math.random() * 1000));
	}

	public getAllReview(id: string): Observable<Array<Review>> {
		return this.getReviews().pipe(map((reviews) => reviews.filter((review: Review) => review.showID === id)));
	}
}
