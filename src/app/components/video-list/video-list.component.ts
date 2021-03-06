import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() colums: any;
  @Input() errorMessage: any;
  @Input() searchTitle: any;

  constructor() {}

  ngOnInit(): void {}
}
