import { Component, OnInit } from '@angular/core';
import { productdata } from 'src/app/mock-data/product-data';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = productdata

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(id: any) {
    this.productList.filter((product) => product.id !== id);
    // this.productList.splice(id, 1);
  }

}
