import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Visualisation 1',
        link: '/first-vue',
        index: 0
      },
      {
        label: 'Visualisation 2',
        link: '/second-vue',
        index: 1
      },
      {
        label: 'Visualisation 3',
        link: '/third-vue',
        index: 2
      }
    ];
  }

  ngOnInit() {
  }
}
