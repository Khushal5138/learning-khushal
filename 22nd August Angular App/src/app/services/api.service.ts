// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private baseUrl = 'http://localhost:3000/api/v1/products'; 

//   constructor(private http: HttpClient) { }

//   getProducts(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/products`);
//   }

//   getCategories(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/categories`);
//   }

//   addProduct(productData: any): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/products`, productData);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products'; // Update with your actual API endpoint

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
