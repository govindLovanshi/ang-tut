import { Component, ContentChild, Input , AfterContentInit } from '@angular/core';
import { PhotoPreviewComponent } from "../photo-preview/photo-preview.component"
import {Photo} from "../app.component"

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterContentInit {

  @Input()
  photos: Photo[] = []

  private _selectedPhotoIndex = 0;

  @ContentChild(PhotoPreviewComponent) photoComponent : PhotoPreviewComponent | any;

  constructor(){}

  ngAfterContentInit() : void {
    this.chnagedSlide(0);
  }

  chnagedSlide(inc : number): void{
    const nextIndex = (this._selectedPhotoIndex + inc ) % this.photos.length;

    this._selectedPhotoIndex = nextIndex < 0 ? this.photos.length -1 : nextIndex;
  
    const selectedPhoto = this.photos[this._selectedPhotoIndex];

    this.photoComponent.selectedPhoto = selectedPhoto;
  }

}
