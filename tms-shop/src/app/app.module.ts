import { NgModule }      from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NavbarComponent } from './shared/components/navigtation-bar/navbar.component'
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

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


