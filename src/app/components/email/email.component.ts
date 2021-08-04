import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent {
	constructor(private storage: StorageService) {}

	data = this.storage.get('authData');
	email = this.data['uid'];
}
