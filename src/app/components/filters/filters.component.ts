import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() getVideos = new EventEmitter();
  @Output() getPhotos = new EventEmitter();
  @Output() getFilterOptions = new EventEmitter();
  @Input() resultType: any;
  @Input() totalCounts: any;

  currentOrient = '';
  currentsize = '';

  hexVal: any = '';

  colorsSugArr: any = [
    'red',
    'orange',
    'yellow',
    'green',
    'turquoise',
    'blue',
    'violet',
    'pink',
    'brown',
    'black',
    'gray',
    'white',
  ];

  orientationsArr: any = [
    'All Orientations',
    'Horizontal',
    'Vertical',
    'Square',
  ];

  sizesArr: any = ['All Sizes', 'Large 24MP', 'Medium 12MP', 'Small 4MP '];

  isActive: any = {
    p: true,
    v: false,
    u: false,
  };

  drop: any = {
    o: false,
    s: false,
    c: false,
  };

  filterOptions: any = {
    orientation: null,
    size: null,
    color: null,
  };

  handleVideosClick() {
    this.getVideos.emit();
    this._resetActiveClassName();
    this.isActive.v = true;
  }

  handlePhotosClick() {
    this.getPhotos.emit();
    this._resetActiveClassName();
    this.isActive.p = true;
  }

  _resetActiveClassName() {
    this.isActive.p = false;
    this.isActive.v = false;
    this.isActive.u = false;
  }

  _resetDropClassName() {
    this.drop.o = false;
    this.drop.s = false;
    this.drop.c = false;
  }

  getColor(col: any) {
    // console.log(col);
    if (col == 'all') {
      this.filterOptions.color = null;
    } else {
      this.filterOptions.color = col;
    }
    this.getFilterOptions.emit(this.filterOptions);
  }

  getType(type: any) {
    // console.log(type);
    if (type === 'All Orientations') {
      this.filterOptions.orientation = null;
      this.currentOrient = null;
    } else {
      this.filterOptions.orientation = type;
      this.currentOrient = type;
    }

    this.getFilterOptions.emit(this.filterOptions);
  }

  getSize(size: any) {
    // console.log(size);
    if (size == 'All Sizes') {
      this.filterOptions.size = null;
      this.currentsize = null;
    } else {
      this.filterOptions.size = size;
      this.currentsize = size;
    }
    this.getFilterOptions.emit(this.filterOptions);
  }

  handlehexChange(e: any) {
    this.hexVal = e;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    // console.log(this.hexVal);
    // this.hexVal = `#${this.hexVal}`;

    const t = /^#[0-9A-F]{6}$/i;

    if (t.test(this.hexVal)) {
      this.filterOptions.color = this.hexVal.slice(1);
      this.getFilterOptions.emit(this.filterOptions);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
