import { Injectable } from '@angular/core';

export interface Menu {
    state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS: Menu[] = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'home' },
  { state: 'crud', name: 'Crud', type: 'link', icon: 'pencil' },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
