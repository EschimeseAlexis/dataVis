import { Component, OnInit } from '@angular/core';
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  icon = faRecordVinyl;

  constructor() { }

  ngOnInit(): void {
  }

}
