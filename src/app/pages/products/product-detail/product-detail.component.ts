import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Product } from '../../../core/model/product.model';
import { ProductService } from '../../../core/services/product.service';
import { addItemToCart } from 'src/app/store/actions/cart.actions';
import { Cart as CartItem } from 'src/app/core/model/cart.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  productDetail!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<AppState>
    ) {
    this.id = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService
      .getProductDetail(this.id)
      .subscribe((data) => (this.productDetail = { ...data, id: this.id }));
  }

  addToCart() {
    const { id: productId, description, ...others  } = this.productDetail;
    const cartItem: CartItem = {
      id: Math.floor(Math.random() * 1001) + productId,
      productId,
      quantity: 1,
      ...others
    }
    this.store.dispatch(addItemToCart({ cartItem }));
  }
}
