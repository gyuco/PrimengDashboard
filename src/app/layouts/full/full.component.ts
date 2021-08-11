import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../menu-items';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css'],
  providers: [MenuItems]
})
export class FullComponent implements OnInit {

  constructor(
    public menuItems: MenuItems
  ) { }

  ngOnInit(): void {
  }

}
