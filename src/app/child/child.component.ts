import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() favFood : EventEmitter<String> = new EventEmitter<String>();

  addFoodInParent(value : any){
    this.favFood.emit(value);
  }
}
