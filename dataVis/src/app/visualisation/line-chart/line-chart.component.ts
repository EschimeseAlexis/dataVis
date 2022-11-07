import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  title = 'Number of albums recorded in the Giants of the Industry';
  type : ChartType = ChartType.LineChart;
  data = [
    ["1950",  21, 1, 16, 0, 0],
    ["1965",  112, 65, 86, 1, 2],
    ["1980",  315,  101, 82, 0, 17],
    ["1995",  817, 265, 169, 75, 55],
    ["2010",  222, 61, 41, 18, 8]
  ];
  columns = ["Countries", "USA", "Germany", "Great Britain", "Japan", "France"];
  options = {
    titleTextStyle: {
      color:'#ffffff',
      fontSize: 18,
    },
    colors:["#f4c0ff", "#d655f8", "#c62cf8", "#f876ed", "#eb9bfd"],
    backgroundColor: '#3f3e48',
    legend: {
      textStyle:{
        color:'#ffffff',
        fontSize:11
      }
    },
    hAxis: {
      title: 'Years',
      textStyle:{
        fontSize:12,
        color:'#ffffff',
      },
      titleTextStyle: {
        color:'#ffffff',
        fontSize:14
      }
    },
    vAxis:{
      title: 'Number of album recorded',
      textStyle:{
        color:'#ffffff',
        fontSize:12
      },
      titleTextStyle: {
        color:'#ffffff',
        fontSize:14
      }
    },
    pointSize: 5,
    curveType: 'function'
  };
  width = 550;
  height = 400;

  constructor() {
  }

  ngOnInit(): void {
  }
}
