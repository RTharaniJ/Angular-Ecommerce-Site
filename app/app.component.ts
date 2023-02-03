import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  product: any = null

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getLatestProducts()
      .subscribe(res => {
        this.product = res;
        console.log(res);
      });
  }
  addto() {
    localStorage.setItem('product',JSON.stringify(this.product))
    }
}
