// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AppMenuComponent } from './app-menu/app-menu.component';
// import { AppHomeComponent } from './app-home/app-home.component';
// import { AppFooterComponent } from './app-footer/app-footer.component';
// import { FormsexampleComponent } from './formsexample/formsexample.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
// import { BooksComponent } from './books/books.component';
// import { ServerComponent } from './server/server.component';
// import { EcommerceComponent } from './ecommerce/ecommerce.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { AdminComponent } from './admin/admin.component';
// import { AddProductComponent } from './add-product/add-product.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     AppMenuComponent,
//     AppHomeComponent,
//     AppFooterComponent,
//     FormsexampleComponent,
//     DynamicFormComponent,
//     BooksComponent,
//     ServerComponent,
//     EcommerceComponent,
//     HomePageComponent,
//     AdminComponent,
//     AddProductComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminComponent,
    AddProductComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
