import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
	selector: 'app-profile-container',
	templateUrl: './profile-container.component.html',
	styleUrls: ['./profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContainerComponent {
	constructor() {}
}
