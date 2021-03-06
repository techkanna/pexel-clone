import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() getVideos = new EventEmitter();
  @Output() getPhotos = new EventEmitter();

  isActive: any = {
    p: true,
    v: false,
    u: false,
  };

  handleVideosClick(e: any) {
    this.getVideos.emit();
    this._resetClassName(e);
    this.isActive.v = true;
  }

  handlePhotosClick(e: any) {
    this.getPhotos.emit();
    this._resetClassName(e);
    this.isActive.p = true;
  }

  _resetClassName(e: any) {
    this.isActive.p = false;
    this.isActive.v = false;
    this.isActive.u = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
