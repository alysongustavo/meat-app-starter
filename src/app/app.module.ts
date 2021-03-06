import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ROUTES} from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {RestaurantService} from './restaurants/restaurant/restaurant.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurants/restaurant-detail/restaurant-menu/restaurant-menu.component';
import { CartShoppingComponent } from './restaurants/restaurant-detail/cart-shopping/cart-shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    RestaurantMenuComponent,
    CartShoppingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
