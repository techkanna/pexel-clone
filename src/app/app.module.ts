import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImgColComponent } from './components/image-list/img-col/img-col.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VidColComponent } from './components/video-list/vid-col/vid-col.component';
import { ColorBtnComponent } from './components/filters/color-btn/color-btn.component';
import { DropdowBtnComponent } from './components/filters/dropdow-btn/dropdow-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    HeaderComponent,
    FiltersComponent,
    ImageListComponent,
    ImgColComponent,
    VideoListComponent,
    VidColComponent,
    ColorBtnComponent,
    DropdowBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
