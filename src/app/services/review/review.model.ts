import { IRawReview } from 'src/app/interfaces/rawReview.interface';

export class Review {
	constructor(rawReviewData: IRawReview) {
		this.id = rawReviewData.id;
		this.showID = rawReviewData.showID;
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
		this.user = rawReviewData.user;
		this.email = rawReviewData.user.email;
		this.image_url = rawReviewData.user.image_url;
	}

	public id: string;
	public showID: string;
	public rating: number;
	public comment: string;
	public email: string;
	public image_url: string;
	public user: {
		email: string;
		image_url: string;
	};
}
