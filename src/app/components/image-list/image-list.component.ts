import { Component, OnInit, Input } from '@angular/core';
// import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  // @Input() images:any;
  @Input() colOneImages: any;
  @Input() colTwoImages: any;
  @Input() colThreeImages: any;
  @Input() errorMessage: any;
  @Input() searchTitle: String = 'laptop';

  // colums = [this.colOneImages, this.colTwoImages, this.colThreeImages];

  // private ss: SearchService
  constructor() {}

  ngOnInit(): void {
    // this.spreadImagesToColumn(this.images);
  }
}
