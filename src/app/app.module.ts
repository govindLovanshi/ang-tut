import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MarvelComponent } from './marvel/marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MarvelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
