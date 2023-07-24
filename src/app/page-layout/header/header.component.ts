import { Component } from '@angular/core';
import { menuOptions } from '../menu';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOptions = menuOptions;

  constructor() {}
  ngOnInit() {}
}
