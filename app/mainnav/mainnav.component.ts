import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core'

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // const nav = (".sticky-nav");
  // ("scroll": () => {
  //       if (window.scrollY > 52) {
  //           this.nav.classList.add('sticky-nav');
  //       }
  //       else {
  //          this.nav.classList.remove("sticky-nav");
  //       }
  //   });

   navbarfixed:boolean = true;

 @HostListener('window:scroll',['$event'])
 onscroll(){
      if (window.scrollY > 20) {
       
        this.navbarfixed = false ;
      }
      else {
          this.navbarfixed = true;
      }
  };
}
