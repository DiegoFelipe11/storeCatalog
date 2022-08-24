import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
const router: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "Products", component: ProductsComponent }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
