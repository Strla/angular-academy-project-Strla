import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, map, tap } from 'rxjs/internal/operators';

import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { IReviewFormData } from 'src/app/pages/show-detail-container/components/add-review-form/add-review-form.component';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private apiUrl: string = 'https://tv-shows.infinum.academy/';
	constructor(private http: HttpClient) {}

	public getAllReviews(show_id: string): Observable<Array<Review>> {
		return this.http.get<{ reviews: Array<IRawReview> }>(`${this.apiUrl}/shows/${show_id}/reviews`).pipe(
			map((response) => {
				return response.reviews.map((rawReviewData: IRawReview) => new Review(rawReviewData));
			})
		);
	}

	public createReview(reviewData: IReviewFormData, show_id: string | null): Observable<any> {
		return this.http.post<IReviewFormData>(`${this.apiUrl}/reviews`, {
			comment: reviewData.comment,
			rating: reviewData.rating,
			show_id: show_id,
		});
	}
}
