import { Component, ContentChildren, QueryList , AfterContentInit , OnInit } from '@angular/core';
import { PhotoComponent, PhotoEvent, PHOTO_EVENT_TYPE } from '../photo/photo.component';

class HighlightedComponent{
  constructor(public instance : PhotoComponent | undefined = undefined , public readonly curIdx = 0){}
}

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})

export class PhotosListComponent implements OnInit , AfterContentInit {
  ngAfterContentInit(): void {
    this.photoComponentQueryList.toArray().forEach((PhotoComponent , curIdx)=>{
      PhotoComponent.onSelect.subscribe((evt : PhotoEvent)=>{

        const {curIdx : prevIdx , instance : prevSelectedComponent} = this.highlightedComponent

        if(evt.type == PHOTO_EVENT_TYPE.SELECT){
          if(prevSelectedComponent && prevIdx != curIdx){
            prevSelectedComponent.selected = false;
          }

          this.highlightedComponent = new HighlightedComponent(PhotoComponent , curIdx)
        }
      })
    })
  }
  ngOnInit(): void {
  }

  public highlightedComponent: HighlightedComponent = new HighlightedComponent ;

  @ContentChildren(PhotoComponent) photoComponentQueryList!: QueryList <PhotoComponent>
}
