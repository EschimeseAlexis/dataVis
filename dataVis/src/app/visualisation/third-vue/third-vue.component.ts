import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Treemap from 'treemap-chart';
import DataSet from '../../../assets/dataset/jsongeneral.json';
import DataSet50 from '../../../assets/dataset/json1950.json';
import DataSet65 from '../../../assets/dataset/json1965.json';
import DataSet80 from '../../../assets/dataset/json1980.json';
import DataSet95 from '../../../assets/dataset/json1995.json';
import DataSet10 from '../../../assets/dataset/json2010.json';
import DataSetUn from '../../../assets/dataset/jsonunknown.json';

@Component({
  selector: 'app-third-vue',
  templateUrl: './third-vue.component.html',
  styleUrls: ['./third-vue.component.scss']
})
export class ThirdVueComponent implements OnInit {

  datasets = [DataSet, DataSet50, DataSet65, DataSet80, DataSet95, DataSet10, DataSetUn];

  loading: boolean;
  chosenIndex: number;

  @ViewChild('tmChart', {static: true})
  tmChartEl!: ElementRef;

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this.loading = true;
    this.chosenIndex = 0;
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // @ts-ignore
    this.chosenIndex = (this._activatedRoute.snapshot.paramMap.get("index") === null) ? 0 : parseInt(this._activatedRoute.snapshot.paramMap.get("index"));

    this.loading = true;

    Treemap()
      .data(this.datasets[this.chosenIndex])
      .size('size')
      .height(500)
      .width(1000)
      .padding(5)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      // @ts-ignore
      .color(d => d.color)(this.tmChartEl.nativeElement);

    this.loading = false;
  }
}
