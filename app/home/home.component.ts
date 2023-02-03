import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  product: any = null

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getLatestProducts()
      .subscribe(res => {
        this.product = res;
        console.log(res);
      });
  }

//   private create() {
//     return this.productService.list()
//   }
//   private getcart(card: string) {
//     return this.productService.object();
//   }
//   private async getOrCreatecartId() {
//     let card = localStorage.getItem('card');
//     if (card) return card;

//     let result = await this.create();
//     localStorage.setItem('card', result.key);
//     return result.key;
//   }

//   async addToCart() {
//     let card = await this.getOrCreatecartId();

//   }
}
