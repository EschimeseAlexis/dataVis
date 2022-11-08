import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MapsTheme, Maps, Bubble, IBubbleRenderingEventArgs, MapsTooltip, ILoadEventArgs, Legend, Marker, Zoom} from '@syncfusion/ej2-angular-maps';
import worldMap from './world-map.json';
import json1950 from '../../../assets/dataset/time-v5/json1950.json';
import json1965 from '../../../assets/dataset/time-v5/json1965.json';
import json1980 from '../../../assets/dataset/time-v5/json1980.json';
import json1995 from '../../../assets/dataset/time-v5/json1995.json';
import json2010 from '../../../assets/dataset/time-v5/json2010.json';
import jsonUnknown from '../../../assets/dataset/time-v5/jsonunknown.json';
import DataSet from '../../../assets/dataset/jsongeneral.json';

Maps.Inject(Bubble, Marker, MapsTooltip, Legend, Zoom);
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
      this.createBubble(DataSet, 2);
    }
    else if (this.chosenIndex == 1){
      this.createBubble(json1950, 10);
    } else if (this.chosenIndex == 2){
      this.createBubble(json1965, 3);
    } else if (this.chosenIndex == 3){
      this.createBubble(json1980, 2);
    } else if (this.chosenIndex == 4){
      this.createBubble(json1995, 2);
    } else if (this.chosenIndex == 5){
      this.createBubble(json2010, 2);
    } else {
      this.createBubble(jsonUnknown, 1);
    }
  }

  createBubble(list: any, zoom: number){
    list.children.forEach((data: any) => {
      data.children.forEach((data2: any) => {
        let somme = 0;
        let genres = '<br>';
        let i = 0;
        data2.children.forEach((data2: any) => {
          i++;
          somme += data2.size;
          if(i%2 == 0)
            genres += data2.size + " " + data2.name + "<br>";
          else
            genres += data2.size + " " + data2.name + ", ";
        });

        this.data.push({rank: 0, name: data2.name, value: this.bubblesize(somme*zoom),
          population: somme, color: undefined, genres: genres});
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
    text: `Nombre d'albums par pays`,
    titleStyle: {
      size: '16px',
      fontFamily: 'inherit'
    }
  }

  public legendSettings: object = {
    visible: true,
    position: 'Float',
    location: {
      x: 10,
      y: 262
    },
    height:'170px',
    type: 'Markers',
    background: '#E6E6E6',
    textStyle: {
      color: '#000000',
      fontFamily: 'inherit'
    },
  };

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
            template: '<div id="template"> <div class="toolback"> <div class="listing2"> <center> ${name} </center> </div> <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD"> <div> <span class="listing1">Albums : </span><span class="listing2">${population}</span> </div> <div> <span class="listing1">Genres : </span><span class="listing2">${genres}</span> </div> </div> </div>'
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
