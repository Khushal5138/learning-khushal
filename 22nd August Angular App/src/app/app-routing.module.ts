// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppHomeComponent } from './app-home/app-home.component';
// import { FormsexampleComponent } from './formsexample/formsexample.component';
// import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
// import { BooksComponent } from './books/books.component';
// import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// const routes: Routes = [
//   // { path: 'home', component: AppHomeComponent },
//   // { path: '', redirectTo: '/home', pathMatch: 'full' }

//   {
//     path: "templateform",
//     title : "templateform",
//     component: FormsexampleComponent,
//   },{
//     path:"dynamicform",
//     title: "dynamicform",
//     component: DynamicFormComponent,
//   },{
//     path: "books/:bookId",
//     title: "Books",
//     component: BooksComponent,
//     data: {pageInfo: "sample book page"},
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes) , ReactiveFormsModule , FormsModule],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addproduct', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
