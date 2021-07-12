import { Component, ChangeDetectionStrategy } from '@angular/core';
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
			average_rating: 7.6,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
		},
		{
			title: 'Breaking Bad',
			description: 'Drama TV Show about a chemistry teacher turning into criminal',
			average_rating: 8.3,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
		},
		{
			title: 'The Wire',
			description: 'A TV show about Baltimore criminal ring in early 2000s',
			average_rating: 9.3,
			image_url:
				'https://hbomax-images.warnermediacdn.com/images/GVU2gkAgT4oNJjhsJAUDk/tileburnedin?size=1280x720&partner=hbomaxcom&host=artist.api.cdn.hbo.com&w=1280',
		},
		{
			title: 'Vikings',
			description: 'A drama/action TV show about Ragnar and his sons',
			average_rating: 8.7,
			image_url: 'https://i.pinimg.com/564x/cb/ff/b7/cbffb7975e92c065ecc6b4516269b62c.jpg',
		},
		{
			title: 'Game of Thrones',
			description: 'A fantasy TV show based on the novel of the same name by George R R Martin',
			average_rating: 9.4,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
		},
		{
			title: 'The Man in the High Castle',
			description:
				'TV show about dystopian version of reality where Nazis won the war based on the novel of the same name',
			average_rating: 8.2,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_.jpg',
		},
		{
			title: 'Rick and Morty',
			description: 'An animated sci-fi/comedy TV show about scientist named Rick and his grandson Morty',
			average_rating: 9.5,
			image_url: 'https://static.posters.cz/image/750/posteri/rick-morty-portal-i40514.jpg',
		},
	];

	shows: Array<Show>;

	ngOnInit() {
		this.shows = this.rawData.map((rawShowData) => {
			return new Show(rawShowData);
		});
	}
}
