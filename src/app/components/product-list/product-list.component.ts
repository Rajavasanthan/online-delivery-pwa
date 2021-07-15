import { Component, OnDestroy, OnInit } from "@angular/core";

import { Observable, Subscription } from "rxjs";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit,OnDestroy {
  productList$: Observable<Product[]>;

  constructor(private productService: ProductService) {}
 

  ngOnInit() {
    this.getProductList();

  }
  getProductList(){
    this.productList$ = this.productService.getProductList();
  }

  changeUnit(product, event) {
    let unitPrice = product.priceList.find(
      (obj) => obj._id == event.target.value
    );
    console.log(unitPrice.price);

    product.currentPrice = unitPrice.price;
  }

  ngOnDestroy(): void {
  }
}
