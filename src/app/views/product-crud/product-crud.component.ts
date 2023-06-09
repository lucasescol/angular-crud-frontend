import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceTsService } from 'src/app/components/template/header/header.service.ts.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderServiceTsService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void { }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
