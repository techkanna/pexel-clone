import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f91700001000001527469b40df640c8897fedd390669e60',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrlPhoto = 'https://api.pexels.com/v1';
  baseUrlVideo = 'https://api.pexels.com/videos';

  constructor(private http: HttpClient) {}

  getCurated(perPage: number = 30) {
    return this.http.get(
      `${this.baseUrlPhoto}/curated?per_page=${perPage}`,
      httpOptions
    );
  }

  getPhotos(query: any = 'mountains', perPage: number = 30) {
    return this.http.get(
      `${this.baseUrlPhoto}/search?query=${query}&per_page=${perPage}`,
      httpOptions
    );
  }

  getNextPageData(nextPageUrl: string) {
    return this.http.get(nextPageUrl, httpOptions);
  }

  getVideos(query: any = 'mountains', perPage: number = 30) {
    return this.http.get(
      `${this.baseUrlVideo}/search?query=${query}&per_page=${perPage}`,
      httpOptions
    );
  }
}
