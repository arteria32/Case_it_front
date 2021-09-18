import { Component, Inject, Input, OnInit } from "@angular/core";
import { animationConfig } from "devextreme/animation/fx";
import ArrayStore from "devextreme/data/array_store";



@Component({
  selector: 'model-widget',
  templateUrl: './model-widget.component.html',
  styleUrls: ['./model-widget.component.scss']
})
export class ModelWidgetComponent {
dataSource:any[];
maxScale:number=25;
useAbs:boolean;
paramsName:string[];

  constructor() {
  }
  delta:number=10;
  deltaTitle:number=10;
  color:string="#ff7c00";
  colorBg:string="#33a1ff";
  }
