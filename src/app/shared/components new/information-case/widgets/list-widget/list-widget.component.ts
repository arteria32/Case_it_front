import { Component, Inject, Input, OnInit } from "@angular/core";
import { animationConfig } from "devextreme/animation/fx";
import ArrayStore from "devextreme/data/array_store";



@Component({
  selector: 'list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.scss']
})
export class ListWidgetComponent implements OnInit {
dataSource:any[];

  constructor(
  ) {
  }
  async ngOnInit(){

}


}



