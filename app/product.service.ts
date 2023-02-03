import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getLatestProducts(){
    return this.http.get('https://gist.githubusercontent.com/RTharaniJ/f388a33cfc75e7ae44742fb3305044ea/raw/83eb62e014d9a8840d81f9ac6d5b2bb2cfa72161/products.json')

  }
}
