import { Component , Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() userId : number = 0 ;
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes) {
      const prep = changes[propName];

      const {periousValue , currentValue , firstValue } = prep;

      console.log( `periousValue , ${periousValue}`);
      console.log( `currentValue , ${currentValue}`);
      console.log( `firstValue , ${firstValue}`);
  }

}
}
