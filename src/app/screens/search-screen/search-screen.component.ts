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

  colOneVideos: any = [];
  colTwoVideos: any = [];
  colThreeVideos: any = [];

  errorMessage: any;
  searchTitle: any = {
    value: 'mountains',
    type: 'Photos',
  };

  totalCounts: any = {
    photos: '19.2k',
    videos: '4.93k',
  };

  nextPageURL: string;
  videosCurrentPageNum: number = 1;
  colums_pics = [this.colOneImages, this.colTwoImages, this.colThreeImages];
  colums_Videos = [this.colOneVideos, this.colTwoVideos, this.colThreeVideos];

  handleSearchValueChange(e: any) {
    if (e) {
      this.searchTitle.value = e;

      switch (this.searchTitle.type) {
        case 'Photos':
          this.getPhotos();

          break;
        case 'Videos':
          this.getVideos(true);

          break;

        default:
          break;
      }
    }
  }

  spreadImagesToColumn(photos: any, isOverWrite: Boolean = false) {
    let divider = photos.length / 3;
    let cols = [[], [], []];

    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];

      if (i < divider) {
        cols[0].push(photo);
      } else if (i < divider * 2) {
        cols[1].push(photo);
      } else if (i < divider * 3) {
        cols[2].push(photo);
      }
    }

    if (isOverWrite) {
      this.colums_pics.forEach((col, i) => {
        hlp(col, cols[i], true);
      });
    } else {
      this.colums_pics.forEach((col, i) => {
        hlp(col, cols[i]);
      });
    }

    function hlp(cName: any, cData: any, isOverWrite: Boolean = false) {
      if (isOverWrite) cName.length = 0;
      cData.forEach((item: any) => {
        cName.push(item);
      });
    }
  }

  loadMore() {
    switch (this.searchTitle.type) {
      case 'Photos':
        // updatePhotos();
        this.ss.getNextPageData(this.nextPageURL).subscribe(
          (data: any) => {
            this.spreadImagesToColumn(data.photos, false);
            this.nextPageURL = data.next_page;
          },
          (err: any) => {
            console.error(err);
            this.errorMessage = 'sorry something went wrong';
          }
        );

        break;
      case 'Videos':
        // updateVideos();
        this.ss.getNextPageData(this.nextPageURL).subscribe(
          (data: any) => {
            this.spreadVideosToColumn(data.videos);
            this.nextPageURL = this._getNextPageURL();
          },
          (err: any) => {
            console.error(err);
            this.errorMessage = 'sorry something went wrong';
          }
        );

        break;

      default:
        break;
    }

    // function updatePhotos() {

    // }

    // function updateVideos() {

    // }
  }

  spreadVideosToColumn(videos: any, isOverWrite: Boolean = false) {
    let divider = videos.length / 3;
    let cols = [[], [], []];

    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];

      if (i < divider) {
        cols[0].push(video);
      } else if (i < divider * 2) {
        cols[1].push(video);
      } else if (i < divider * 3) {
        cols[2].push(video);
      }
    }

    if (isOverWrite) {
      this.colums_Videos.forEach((col, i) => {
        hlp(col, cols[i], true);
      });
    } else {
      this.colums_Videos.forEach((col, i) => {
        hlp(col, cols[i]);
      });
    }

    function hlp(cName: any, cData: any, isOverWrite: Boolean = false) {
      if (isOverWrite) cName.length = 0;
      cData.forEach((item: any) => {
        cName.push(item);
      });
    }
  }

  getVideos(isOverWrite: Boolean = true) {
    this.ss.getVideos({ query: this.searchTitle.value }).subscribe(
      (data: any) => {
        this.totalCounts.videos = this._getCountStr(data.total_results);

        this.spreadVideosToColumn(data.videos, isOverWrite);
        this.searchTitle.type = 'Videos';

        this.nextPageURL = this._getNextPageURL();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getPhotos(isOverWrite: Boolean = true) {
    this.ss.getPhotos({ query: this.searchTitle.value }).subscribe(
      (data: any) => {
        this.totalCounts.photos = this._getCountStr(data.total_results);
        this.spreadImagesToColumn(data.photos, isOverWrite);
        this.searchTitle.type = 'Photos';
        this.nextPageURL = data.next_page;
      },
      (err) => {
        console.error(err);
        this.errorMessage = 'sorry something went wrong';
      }
    );
  }

  _getNextPageURL() {
    this.videosCurrentPageNum++;
    return `https://api.pexels.com/videos/search/?page=${this.videosCurrentPageNum}&per_page=30&query=${this.searchTitle.value}`;
  }

  getFilterOptions(e: any) {
    let opts = {
      query: this.searchTitle.value,
      orientation: e.orientation,
      size: e.size,
      color: e.color,
    };

    switch (opts.size) {
      case 'Large 24MP':
        opts.size = 'large';
        break;
      case 'Medium 12MP':
        opts.size = 'medium';
        break;
      case 'Small 4MP ':
        opts.size = 'small';
        break;

      default:
        break;
    }

    switch (opts.orientation) {
      case 'Horizontal':
        opts.orientation = 'landscape';
        break;
      case 'Vertical':
        opts.orientation = 'portrait';
        break;
      case 'Square':
        opts.orientation = 'square';
        break;

      default:
        break;
    }

    switch (this.searchTitle.type) {
      case 'Photos':
        this.ss.getPhotos(opts).subscribe(
          (data: any) => {
            this.spreadImagesToColumn(data.photos, true);
            this.searchTitle.type = 'Photos';
            this.nextPageURL = data.next_page;
            // console.log({ opts });
          },
          (err) => {
            console.error(err);
            this.errorMessage = 'sorry something went wrong';
          }
        );

        break;
      case 'Videos':
        this.ss.getVideos(opts).subscribe(
          (data: any) => {
            this.spreadVideosToColumn(data.videos, true);
            this.searchTitle.type = 'Videos';

            this.nextPageURL = this._getNextPageURL();
          },
          (err) => {
            console.error(err);
          }
        );
        break;

      default:
        break;
    }
  }

  _getCountStr(num: number) {
    return num < 1000 ? num + '' : num / 1000 + 'k';
  }

  constructor(private ss: SearchService) {}

  ngOnInit(): void {
    this.getPhotos();
    // this.getVideos();
  }
}
