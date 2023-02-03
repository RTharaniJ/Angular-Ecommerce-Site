import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  addToCart() {
    // let store = JSON.parse(localStorage.getItem("note"));
    // let body = store[index];
    // let cartStore = localStorage.getItem("cartStore");
    // let noteObj = "";
    // if (cartStore == null) {
    //     noteObj = [];
    //     noteObj.push(body);
    // }
    // else {
    //     noteObj = JSON.parse(cartStore);
    //     noteObj.forEach(function (element, ind) {
    //         if (element.id == body.id) {
    //             body = null;
    //         }
    //     })
    //     if (body != null) {
    //         noteObj.push(body);
    //     }
    // }
    // localStorage.setItem("cartStore", JSON.stringify(noteObj));
  }

  removeFromCart() {

  }


}
