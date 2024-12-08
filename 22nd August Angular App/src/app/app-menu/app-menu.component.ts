// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './app-menu.component.html',
//   styleUrls: ['./app-menu.component.css']
// })
// export class AppMenuComponent {
//   links = [
//     { path: '/', label: 'Home' },
//     { path: '/admin', label: 'Admin' },
//     { path: '/addproduct', label: 'Add Product' },
//   ];
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {
  menuItems = [
    { path: '/', title: 'Home' },
    { path: '/admin', title: 'Admin' },
    { path: '/addproduct', title: 'Add Product' }
  ];
}

