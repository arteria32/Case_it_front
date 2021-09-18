import { Component, Inject, Input, OnInit } from "@angular/core";
import { animationConfig } from "devextreme/animation/fx";
import ArrayStore from "devextreme/data/array_store";
import moment from "moment";
import { ServiceParamValue } from "src/app/app.module";
import { ApiServiceObjects, ParameterTag } from "src/app/shared/services/api-object.service";
import { ApiServiceParamValue } from "src/app/shared/services/api-param-value.service";



@Component({
  selector: 'load-widget',
  templateUrl: './load-widget.component.html',
  styleUrls: ['./load-widget.component.scss']
})
export class LoadWidgetComponent implements OnInit {
@Input() inputParams;
dataSource:any[];
@Input() maxScale:number;
  constructor(private paramService:ApiServiceParamValue,private objectService:ApiServiceObjects
  ) {
 
  }
  async ngOnInit(){
    this.getParams(this.inputParams)
    this.allParams=await this.objectService.getParameters().toPromise();
  this.dataSource=await this.getParams(this.inputParams)
  if (!this.maxScale) this.maxScale=this.dataSource[0].value*1.2
}
//Костыль
allParams:any=[];
  async getParams(tags:string[]){
  let result:any[]=[];
  if( this.allParams) this.allParams=await this.objectService.getParameters().toPromise();
  for (let i=0;i<tags.length;i++){
    let curParam=this.allParams.find(item=>item.tag==tags[i]);
    let lastValue=await this.paramService.getValueLastByTag(tags[i],"Parameter").toPromise()
    curParam.value=lastValue.value;
    curParam.date=moment(lastValue.date).format("DD:MM:YY HH:mm")
  result.push(curParam)
}
return result
}
}
