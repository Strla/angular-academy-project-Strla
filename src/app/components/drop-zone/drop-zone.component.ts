import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropZoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
