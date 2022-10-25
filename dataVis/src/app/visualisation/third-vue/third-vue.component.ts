import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Treemap from 'treemap-chart';
import * as d3 from 'd3';
import DataSet from '../../../assets/dataset/jsongeneral.json';

@Component({
  selector: 'app-third-vue',
  templateUrl: './third-vue.component.html',
  styleUrls: ['./third-vue.component.scss']
})
export class ThirdVueComponent implements OnInit {
  loading: boolean;

  @ViewChild('tmChart', {static: true})
  tmChartEl!: ElementRef;

  constructor() {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    const color = d3.scaleOrdinal(d3.schemePaired);

    Treemap()
      .data(DataSet)
      .size('size')
      .height(500)
      .width(1000)
      .padding(5)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      // @ts-ignore
      .color(d => d.color)(this.tmChartEl.nativeElement);
      //.color(d => color(d.name))(this.tmChartEl.nativeElement);

    this.loading = false;
  }
}
