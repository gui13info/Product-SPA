import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(dados => {
      this.products = dados
    })
  }

}
