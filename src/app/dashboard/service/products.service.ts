import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interface/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.url}/products`);
  }
}
