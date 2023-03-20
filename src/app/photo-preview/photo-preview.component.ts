import { Component , OnInit , Input} from '@angular/core';
import { Photo } from '../app.component';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  @Input()
  public selectedPhoto! : Photo;
  

  constructor(){}

  ngOnInit() : void{

  }
}
