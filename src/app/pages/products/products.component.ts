import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/model/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((data) => {
      this.productsList = data;
      this.isLoading = false;
    })
  }

}
