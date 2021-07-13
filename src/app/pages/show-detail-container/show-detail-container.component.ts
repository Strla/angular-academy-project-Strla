import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-show-detail-container',
	templateUrl: './show-detail-container.component.html',
	styleUrls: ['./show-detail-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private showService: ShowService) {}

	public show: Show | undefined;

	ngOnInit(): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');

		if (id) {
			this.show = this.showService.getShow(id);
		}
	}
}
