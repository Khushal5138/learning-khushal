// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../services/api.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
//   categories: any[] = [];

//   constructor(private apiService: ProductService) { }

//   ngOnInit(): void {
//     // this.apiService.getCategories().subscribe((data: any[]) => {
//     //   this.categories = data;
//     // });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Category {
  _id: string;
  name: string;
  description: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<{ categories: Category[] }>('http://localhost:3000/api/v1/categories').subscribe(
      (response) => {
        this.categories = response.categories;
        console.log(this.categories);
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }

}
