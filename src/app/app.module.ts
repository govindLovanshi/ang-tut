import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    PhotoPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
