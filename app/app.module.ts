import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SearchiconComponent } from './searchicon/searchicon.component';
import { TopnavlistComponent } from './topnavlist/topnavlist.component';
import { MainnavlistComponent } from './mainnavlist/mainnavlist.component';
import { LogoComponent } from './logo/logo.component';
import { CountrysupportComponent } from './countrysupport/countrysupport.component';
import { AddtoiconsComponent } from './addtoicons/addtoicons.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { ShopbycategoryComponent } from './shopbycategory/shopbycategory.component';
import { ProductcatagoryComponent } from './productcatagory/productcatagory.component';
import { SidenavproductComponent } from './sidenavproduct/sidenavproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductlistComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    TopnavComponent,
    MainnavComponent,
    SocialIconComponent,
    SearchiconComponent,
    TopnavlistComponent,
    MainnavlistComponent,
    LogoComponent,
    CountrysupportComponent,
    AddtoiconsComponent,
    CardComponent,
    BannerComponent,
    ShopbycategoryComponent,
    ProductcatagoryComponent,
    SidenavproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
