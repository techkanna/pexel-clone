import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss'],
})
export class SearchScreenComponent implements OnInit {
  colOneImages: any = [];
  colTwoImages: any = [];
  colThreeImages: any = [];
  errorMessage: any;
  searchTitle: String = 'laptop';

  handleSearchValueChange(e: any) {
    console.log(e);
  }

  spreadImagesToColumn(photos: any) {
    let divider = photos.length / 3;

    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];

      if (i < divider) {
        this.colOneImages.push(photo);
      } else if (i < divider * 2) {
        this.colTwoImages.push(photo);
      } else if (i < divider * 3) {
        this.colThreeImages.push(photo);
      }
    }
  }
  constructor(private ss: SearchService) {}

  ngOnInit(): void {
    this.ss.getPhotos().subscribe(
      (data: any) => {
        this.spreadImagesToColumn(data.photos);
      },
      (err) => {
        console.error(err);
        this.errorMessage = 'sorry something went wrong';
      }
    );
  }
}
