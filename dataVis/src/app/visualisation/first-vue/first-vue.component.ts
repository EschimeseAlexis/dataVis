import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MapsTheme, Maps, Bubble, IBubbleRenderingEventArgs, MapsTooltip, ILoadEventArgs, } from '@syncfusion/ej2-angular-maps';
import worldMap from './world-map.json';
import wasbiData from '../../../../../data/wazajson-v5.json';

import json1950 from '../../../../../data/time-v4/json1950.json';
import json1965 from '../../../../../data/time-v4/json1965.json';
import json1980 from '../../../../../data/time-v4/json1980.json';
import json1995 from '../../../../../data/time-v4/json1995.json';
import json2010 from '../../../../../data/time-v4/json2010.json';
import jsonunknown from '../../../../../data/time-v4/jsonunknown.json';

Maps.Inject(Bubble, MapsTooltip);
export interface Data { value?: number; }

@Component({
  selector: 'app-first-vue',
  templateUrl: './first-vue.component.html',
  styleUrls: ['./first-vue.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstVueComponent implements OnInit  {
  chosenIndex: number;
  data: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this.chosenIndex = 0;
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // @ts-ignore
    this.chosenIndex = (this._activatedRoute.snapshot.paramMap.get("index") === null) ? 0 : parseInt(this._activatedRoute.snapshot.paramMap.get("index"));
    if(this.chosenIndex == 0){
      wasbiData.forEach((data: any) => {
        if(data.parent == null){
          this.data.push({rank: data.rank, name: data.name, value: this.bubblesize(data.population),
            population: data.population, color: data.color})
        }
      });
    }
    else if (this.chosenIndex == 1){
      this.createBubble(json1950);
    } else if (this.chosenIndex == 2){
      this.createBubble(json1965);
    } else if (this.chosenIndex == 3){
      this.createBubble(json1980);
    } else if (this.chosenIndex == 4){
      this.createBubble(json1995);
    } else if (this.chosenIndex == 5){
      this.createBubble(json2010);
    } else {
      this.createBubble(jsonunknown);
    }
  }

  createBubble(list: any){
    list.children.forEach((data: any) => {
      data.children.forEach((data2: any) => {
        let somme = 0;
        let genres = '<br>';
        data2.children.forEach((data2: any) => {
          somme += data2.size;
          genres += data2.size + " " + data2.name + "<br>";
        });

        this.data.push({rank: 0, name: data2.name, value: this.bubblesize(somme*10),
          population: somme, color: data.color, genres: genres});
      });
    });
  }

  public load = (args: ILoadEventArgs) => {
    // custom code start
    let theme: string = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    args!.maps!.theme = <MapsTheme>(theme.charAt(0).toUpperCase() +
      theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
    // custom code end
  }

  public zoomSettings: object= {
    enable: true,
    horizontalAlignment: 'Near',
    toolBarOrientation: 'Vertical',
    pinchZooming: true
  }

  public titleSettings : object =  {
    text: 'Description ici !',
    titleStyle: {
      size: '16px'
    }
  }

  public layers: object[] =  [
    {
      shapeDataPath: 'name',
      shapePropertyPath: 'name',
      shapeData:  worldMap,
      shapeSettings: {
        fill: '#E5E5E5'
      },
      bubbleSettings: [
        {
          visible: true,
          valuePath: 'value',
          colorValuePath: 'color',
          minRadius: 3,
          maxRadius: 70,
          opacity: 0.8,
          dataSource: this.data,
          tooltipSettings: {
            visible: true,
            valuePath: 'population',
            template: '<div id="template"> <div class="toolback"> <div class="listing2"> <center> ${name} </center> </div> <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD"> <div> <span class="listing1">Rank : </span><span class="listing2">${rank}</span> </div> <div> <span class="listing1">Population : </span><span class="listing2">${population}</span> </div> <div> <span class="listing1">Genres : </span><span class="listing2">${genres}</span> </div> </div> </div>'
          },
        }
      ]
    }
  ]

  public bubbleRendering = (args: IBubbleRenderingEventArgs) => {
    args.radius = (args.data as Data).value;
  }

  bubblesize(value: number): number  {
    let max: number = 4000;
    let min: number = 1;
    let maxBox: number = 70 * 70 * 2 * Math.PI;
    let minBox: number = 3 * 3 * 2 * Math.PI;
    let box: number = (value - min) / (max - min) * (maxBox - minBox) + minBox;
    if (box < minBox) {
      box = minBox;
    }
    return Math.sqrt(box / (Math.PI * 2)) / 2;
  }
}
