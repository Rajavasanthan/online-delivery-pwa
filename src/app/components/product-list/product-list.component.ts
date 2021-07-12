import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productList = this.productService.listProduct()
  }

  changeUnit(product,event) {
    
    let unitPrice = product.priceList.find(obj => obj._id == event.target.value)
    console.log(unitPrice.price);
    
    product.currentPrice = unitPrice.price;
    
  }

}
