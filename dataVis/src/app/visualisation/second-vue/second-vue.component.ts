import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import * as d3 from 'd3';
import flareData from './flare.json';

@Component({
  selector: 'app-second-vue',
  templateUrl: './second-vue.component.html',
  styleUrls: ['./second-vue.component.scss']
})
export class SecondVueComponent implements OnInit {
  loading: boolean;

  @ViewChild('sbChart', {static: true})
  sbChartEl!: ElementRef;

  constructor() {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    const color = d3.scaleOrdinal(d3.schemePaired);

    Sunburst()
      .data(flareData)
      .size('size')
      .height(500)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      // @ts-ignore
      .color(d => color(d.name))(this.sbChartEl.nativeElement);
      //.color(d => '#1449b2')(this.sbChartEl.nativeElement);

    this.loading = false;
  }
}
