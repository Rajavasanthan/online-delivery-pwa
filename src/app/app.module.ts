import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { OfferComponent } from './components/offer/offer.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    CategoryComponent,
    CategoryCardComponent,
    OfferComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
