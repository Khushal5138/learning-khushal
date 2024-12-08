
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Product {
//   _id: string;
//   code: string;
//   name: string;
//   excerpt: string;
//   description?: string;
//   price: number;
//   stock: number;
//   category?: {
//     _id: string;
//     name: string;
//     description: string;
//   };
//   created_at: string;
// }

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts() {
//     this.http.get<{ ok: boolean; products: Product[] }>('http://localhost:3000/api/v1/products').subscribe(
//       (response) => {
//         if (response.ok) {
//           this.products = response.products;
//           console.log(this.products);
//         }
//       },
//       (error) => {
//         console.error("Error fetching products:", error);
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  _id: string;
  code: string;
  name: string;
  excerpt: string;
  description?: string;
  price: number;
  stock: number;
  category?: {
    _id: string;
    name: string;
    description: string;
  };
  created_at: string;
  showDetails?: boolean; // Add this property to handle details visibility
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<{ ok: boolean; products: Product[] }>('http://localhost:3000/api/v1/products').subscribe(
      (response) => {
        if (response.ok) {
          this.products = response.products.map(product => ({
            ...product,
            showDetails: false // Initialize the property for each product
          }));
          console.log(this.products);
        }
      },
      (error) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  toggleDetails(product: Product) {
    product.showDetails = !product.showDetails;
  }
}
