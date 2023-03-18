import { Component , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() Item : number = 0;;
  @Output() itemChanged = new EventEmitter<number>();
  ItemPrice : number = 5;

  IncreQTY(){
    this.Item += 1;
    this.updateQty()
  }

  decQTY(){
    this.Item -= 1;
    this.updateQty()

  }

  updateQty(){
    this.itemChanged.emit(this.Item)
  }


}
