import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
   public toggleSidenav$ = new EventEmitter();
  constructor() { }
}
