import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() //obligatoriu paranteze la adnotari
  product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
