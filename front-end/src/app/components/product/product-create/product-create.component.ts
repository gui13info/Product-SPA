import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private product: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void{
    this.product.showMessage('Produto criado!')
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
