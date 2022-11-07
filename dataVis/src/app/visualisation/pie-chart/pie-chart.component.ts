import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  title = 'Share of market of the Giants of the Industry';
  type : ChartType = ChartType.PieChart;
  data = [
    ['USA', 45.0],
    ['Germany', 26.8],
    ['Great Britain', 12.8],
    ['Japan', 8.5],
    ['France', 6.2],
  ];
  columns = ['Countries', 'Percentage'];
  options = {
    pieHole:0.3,
    colors:["#f4c0ff", "#d655f8", "#c62cf8", "#f876ed", "#eb9bfd"],
    backgroundColor: '#3f3e48',
    legend: {
      textStyle:{
        color:'#ffffff',
        fontSize:11
      }
    },
    titleTextStyle: {
      color:'#ffffff',
      fontSize: 18
    }
  };
  width = 360;
  height = 250;

  constructor() { }

  ngOnInit(): void {
  }

}
