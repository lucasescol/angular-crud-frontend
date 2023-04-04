import { HeaderServiceTsService } from './header.service.ts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private headerService: HeaderServiceTsService) {}

  get title(): string{
    return this.headerService.headerData.title
  }
  get icon(): string{
    return this.headerService.headerData.icon
  }
  get routeUrl(): string{
    return this.headerService.headerData.routeUrl
  }

}