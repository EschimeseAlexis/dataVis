import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Sunburst from 'sunburst-chart';
import DataSet from '../../../assets/dataset/jsongeneral.json';
import DataSet50 from '../../../assets/dataset/json1950.json';
import DataSet65 from '../../../assets/dataset/json1965.json';
import DataSet80 from '../../../assets/dataset/json1980.json';
import DataSet95 from '../../../assets/dataset/json1995.json';
import DataSet10 from '../../../assets/dataset/json2010.json';
import DataSetUn from '../../../assets/dataset/jsonunknown.json';

@Component({
  selector: 'app-second-vue',
  templateUrl: './second-vue.component.html',
  styleUrls: ['./second-vue.component.scss']
})
export class SecondVueComponent implements OnInit {

  datasets = [DataSet, DataSet50, DataSet65, DataSet80, DataSet95, DataSet10, DataSetUn];

  loading: boolean;
  chosenIndex: number;

  @ViewChild('sbChart', {static: true})
  sbChartEl!: ElementRef;

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this.loading = true;
    this.chosenIndex = 0;
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // @ts-ignore
    this.chosenIndex = (this._activatedRoute.snapshot.paramMap.get("index") === null) ? 0 : parseInt(this._activatedRoute.snapshot.paramMap.get("index"));

    this.loading = true;
    //const color = d3.scaleOrdinal(d3.schemePaired);

    Sunburst()
      .data(this.datasets[this.chosenIndex])
      .size('size')
      .height(500)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      // @ts-ignore
      .color(d => d.color)(this.sbChartEl.nativeElement);

    this.loading = false;
  }
}
