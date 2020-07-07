import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-layout',
  templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.scss']
})
export class SideNavLayoutComponent implements OnInit {

  isMenuOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
