import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrysupport',
  templateUrl: './countrysupport.component.html',
  styleUrls: ['./countrysupport.component.scss']
})
export class CountrysupportComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  selectedValue = '';
  phoneNumber = '568909898';
  country = 'india';
  changeCountry(e: any) {
    let contacts = new Map()
    contacts.set('india', '+91888888888')
    contacts.set('usa', '+188888888')
    contacts.set('canada', '+1999999999')
    contacts.set('uae', '+97188888888')

    console.log(e.target.value)
    this.selectedValue = e.target.value;
    this.country = e.target.value;
    this.phoneNumber = contacts.get(this.country);
    // .src = `images/${country}.png`;
  }
}
