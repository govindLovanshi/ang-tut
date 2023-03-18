import { Component , Input, Output , EventEmitter} from '@angular/core';
import{Product} from '../product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input('pdata')
  productData!: Product;
  @Output() updateCartEnv : EventEmitter<any> = new EventEmitter<any>();

  isAddedToCart : boolean = false;

  IncQty(){

    this.productData.qty = this.productData.qty + 1;
  }

  DecQty(){
    if(this.productData.qty > 1){
      this.productData.qty = this.productData.qty - 1;
    }
  }

  updateCart(value: any){
    this.isAddedToCart = !this.isAddedToCart; // toggle isAddedToCart
    let payload = {
      addToCart : this.isAddedToCart,
      product : this.productData
    }
    this.updateCartEnv.emit(payload);
  }
}
