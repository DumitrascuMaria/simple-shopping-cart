import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CoreModule } from '../core/core.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
   
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule
  ]
})
export class ProductsModule { }
