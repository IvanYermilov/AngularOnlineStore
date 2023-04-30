import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { HomeModule } from './modules/home.module'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: '', redirectTo: '/default-route', pathMatch: 'full' },
    { path: 'default-route', component: HomeComponent },
  ];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HomeModule, RouterModule.forRoot(routes) ],
    declarations: [ AppComponent, ProductsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }