import { IRawShow } from 'src/app/interfaces/rawShow.interface';

export class Show {
	constructor(rawShowData: IRawShow) {
		this.title = rawShowData.title;
		this.description = rawShowData.description || 'Default description';
		this.averageRating = rawShowData.average_rating;
		this.imageUrl = rawShowData.image_url;
		this.id = rawShowData.id;
	}

	public title: string;
	public description: string;
	public averageRating: number;
	public imageUrl: string;
	public id: string;
}
