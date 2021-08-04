export interface IRawReview {
	id: string;
	showID: string;
	rating: number;
	comment: string;
	user: {
		email: string;
		image_url: string;
	};
}
