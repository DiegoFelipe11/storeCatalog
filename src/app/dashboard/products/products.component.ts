import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/Products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.ListProducts();
  }

  ListProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products.push(...res);
    })
  }

}
