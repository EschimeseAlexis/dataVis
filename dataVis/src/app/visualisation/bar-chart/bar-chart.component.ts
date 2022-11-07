import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  title = 'Number of Albums by Genre';
  type : ChartType = ChartType.ColumnChart;
  data = [
    ["Electro", 900],
    ["Metal", 1000],
    ["Pop", 1170],
    ["Rock", 1250],
    ["Folk", 1250],
    ["Hip-Hop", 1250],
    ["Jazz", 1250],
    ["Rap", 1250],
    ["Classic", 1530]
  ];
  columns = ['Genre', 'Quantity'];
  options = {
    colors:["#e575ff"],
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
    },
    hAxis: {
      title: 'Genre',
      textStyle:{
        fontSize:12,
        color:'#ffffff',
      },
      titleTextStyle: {
        color:'#ffffff',
        fontSize:14
      }
    },
    vAxis: {
      title: 'Number of album recorded',
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      },
      titleTextStyle: {
        color:'#ffffff',
        fontSize:14
      }
    }
  };
  width = 550;
  height = 400;

  constructor() { }

  ngOnInit(): void {
  }

}
