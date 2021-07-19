import { IRawReview } from 'src/app/interfaces/rawReview.interface';

export class Review {
	constructor(rawReviewData: IRawReview) {
		this.id = rawReviewData.id;
		this.showID = rawReviewData.showID;
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
	}

	public id: string;
	public showID: string;
	public rating: number;
	public comment: string;
}
