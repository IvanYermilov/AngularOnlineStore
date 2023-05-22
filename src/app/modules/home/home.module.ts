import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }   from './home.component';
import { FeaturedProductCardComponent }   from './../../components/featured-product-card/featured-product-card.component';
import { ColorPickerComponent } from './../../components/color-picker/color-picker.component'
import { SizePickerComponent } from './../../components/size-picker/size-picker.component'
import { ProductCardComponent } from './../../components/product-card/product-card.component'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  imports: [ CommonModule, HomeRoutingModule ],
  declarations: [ HomeComponent, FeaturedProductCardComponent, ColorPickerComponent, SizePickerComponent, ProductCardComponent ],
  bootstrap:    [ HomeComponent ]
})
export class HomeModule { }
