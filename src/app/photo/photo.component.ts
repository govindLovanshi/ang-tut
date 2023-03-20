import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Photo } from '../interfaces';

export enum PHOTO_EVENT_TYPE{
  SELECT = "SELECT",
  REMOVE = "REMOVE",
}

export interface PhotoEvent{
  type : PHOTO_EVENT_TYPE ;
  photo : Photo
}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input()
  photo! : Photo;

  @Input()
  selected : boolean = false;

  @Output()
  onSelect = new EventEmitter<PhotoEvent>();

  @Output()
  onRemove = new EventEmitter<PhotoEvent>();

  constructor(){

  }

  ngOnInit() : void {}

}
