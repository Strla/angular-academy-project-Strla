import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	rawData: Array<any> = [
		{
			title: 'Brookyln Nine-Nine',
			description: 'A comedy TV show about the police force in Brooklyn',
			averageRating: 7.6,
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
		},
		{
			title: 'Breaking Bad',
			description: 'Drama TV Show about a chemistry teacher turning into criminal',
			averageRating: 8.3,
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
		},
		{
			title: 'The Wire',
			description: 'A show about Baltimore criminal ring in early 2000s',
			averageRating: 9.3,
			imageUrl:
				'https://hbomax-images.warnermediacdn.com/images/GVU2gkAgT4oNJjhsJAUDk/tileburnedin?size=1280x720&partner=hbomaxcom&host=artist.api.cdn.hbo.com&w=1280',
		},
		{
			title: 'Rick and Morty',
			description: 'An animated sci-fi/comedy TV show about scientist named Rick and his grandson Morty',
			averageRating: 9.5,
			imageUrl: 'https://static.posters.cz/image/750/posteri/rick-morty-portal-i40514.jpg',
		},
	];

	shows: Array<Show>;

	ngOnInit() {
		this.shows = this.rawData.map((rawShowData) => {
			return new Show(rawShowData);
		});
	}
}
