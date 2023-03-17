import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input('foodsChild') foodArr : string[] = [];
@Output('deleteEvent')foodDel = new EventEmitter<number>();
  constructor() {

  }

  deleteItem(index: number) {
    console.log("index===>" , index)
    this.foodDel.emit(index);
  }
}
