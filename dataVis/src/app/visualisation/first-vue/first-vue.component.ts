import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-vue',
  templateUrl: './first-vue.component.html',
  styleUrls: ['./first-vue.component.scss']
})
export class FirstVueComponent implements OnInit {

  chosenIndex: number;

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this.chosenIndex = 0;
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // @ts-ignore
    this.chosenIndex = (this._activatedRoute.snapshot.paramMap.get("index") === null) ? 0 : parseInt(this._activatedRoute.snapshot.paramMap.get("index"));
  }
}
