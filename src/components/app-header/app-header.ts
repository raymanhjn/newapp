import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {
  @Input('headerText') headerText:string;
  @Input('headerName') headerName:string;

  constructor() {

  }
}
