import { Component, NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NavbarComponent } from './components/navigtation-bar/navbar.component'
import { ProductsComponent } from './modules/products/products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'home',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    },
    { path: 'products', component: ProductsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ];

  // templates/navigation-buttons.html cscc
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
    declarations: [ AppComponent, ProductsComponent, NavbarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }