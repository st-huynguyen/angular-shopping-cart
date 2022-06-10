import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINT } from '../constants';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = ENDPOINT.PRODUCT;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}.json`).pipe(
      map((res) => {
        const result = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            result.push({ ...res[key], id: key });
          }
        }
        return result;
      })
    );
  }

  getProductDetail(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${productId}.json`)
  }
}
