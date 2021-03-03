import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ImageListComponent } from './components/image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    HeaderComponent,
    FiltersComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
