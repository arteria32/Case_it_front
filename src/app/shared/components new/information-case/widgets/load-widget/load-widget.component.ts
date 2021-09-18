import { Component, Inject, Input, OnInit } from "@angular/core";
import { animationConfig } from "devextreme/animation/fx";
import ArrayStore from "devextreme/data/array_store";



@Component({
  selector: 'load-widget',
  templateUrl: './load-widget.component.html',
  styleUrls: ['./load-widget.component.scss']
})
export class LoadWidgetComponent  {
@Input()
value:number;
@Input()
maxValue:number;
@Input()
unit:string;

  constructor() {
 
  }
}
