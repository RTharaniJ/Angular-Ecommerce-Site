import { Component,Input, OnInit } from '@angular/core';
// import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../product.service';
import { AddToCartService } from '../add-to-cart.service';


interface Icard{
  id:string,
  name:string,
  price:number,
  priceWithDiscount:number,
  isNew:boolean,
  imageName:string,
  ratings:number,
  wishlist:boolean

}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  product: any = null
  @Input () cards:Icard[]=[];
  // @Input () product:any = [];
  constructor(private productService: ProductService, private addToCartService: AddToCartService) { }

addToCart(product: CardComponent){
  this.addToCartService.addToCart()
}

  ngOnInit(): void {
  }

}
