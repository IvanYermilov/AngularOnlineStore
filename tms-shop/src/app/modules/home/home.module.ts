import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }   from './home.component';
import { FeaturedProductCardComponent }   from './../../shared/components/featured-product-card/featured-product-card.component';
import { ColorPickerComponent } from './../../shared/components/color-picker/color-picker.component'
import { SizePickerComponent } from './../../shared/components/size-picker/size-picker.component'
import { ProductCardComponent } from './../../shared/components/product-card/product-card.component'
import { AppRoutingModule } from './../../app-routing.module'

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  declarations: [ HomeComponent, FeaturedProductCardComponent, ColorPickerComponent, SizePickerComponent, ProductCardComponent ],
  bootstrap:    [ HomeComponent ]
})
export class HomeModule { }
