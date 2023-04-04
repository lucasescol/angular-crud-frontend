import { HeaderServiceTsService } from './../../components/template/header/header.service.ts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private headerService: HeaderServiceTsService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/'
    }
  }
}
