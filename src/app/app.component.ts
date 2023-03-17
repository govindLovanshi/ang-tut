import { Component } from '@angular/core';

@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  foods: string[] = [];

  deletedFood : string = '';

  dataIsHere(value: any){
  console.log(value);
  let data = value
  this.foods.push(data);
}

removeFood(indexfood: any) {
  this.deletedFood = this.foods[indexfood];
  this.foods = this.foods.filter((val, index) => index != indexfood);
}
}
