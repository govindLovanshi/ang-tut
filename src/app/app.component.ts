import { Component } from '@angular/core';
import {Product} from './product'
@Component({ // component decoratiors 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : Product[] = [
    {name: 'boook',qty : 7 , price :30}, 
    {name: 'pen',qty : 2 , price :10}, 
    {name: 'pencil',qty : 2 , price :7}, 
    {name: 'earser',qty : 3 , price :4}, 
    {name: 'laptop',qty : 1 , price :25000}, 
  ];

  cartBucket : Product[] = []

  constructor(){

  }
  update(payload: any){
    if(payload.addToCart){
      this.cartBucket.push(payload.product);
    }
    else{
      this.cartBucket = this.cartBucket.filter(item => item != payload.product)
    }

  }

  calPrice(){
    let total = 0;
    this.cartBucket.forEach(item => {
      total = total + item.qty * item.price;
    });
    return total;
  }
}
