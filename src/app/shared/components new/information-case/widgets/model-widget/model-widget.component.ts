import { Component, Inject, Input, OnInit } from "@angular/core";
import { animationConfig } from "devextreme/animation/fx";
import ArrayStore from "devextreme/data/array_store";
import moment from "moment";
import { ServiceParamValue } from "src/app/app.module";
import { ApiServiceObjects, ParameterTag } from "src/app/shared/services/api-object.service";
import { ApiServiceParamValue } from "src/app/shared/services/api-param-value.service";



@Component({
  selector: 'model-widget',
  templateUrl: './model-widget.component.html',
  styleUrls: ['./model-widget.component.scss']
})
export class ModelWidgetComponent implements OnInit {
@Input() inputParams;
dataSource:any[];
@Input()
maxScale:number;
@Input() 
useAbs:boolean;
@Input() 
paramsName:string[];

  constructor(private paramService:ApiServiceParamValue,private objectService:ApiServiceObjects
  ) {
    
  }
  delta:number;
  deltaTitle:number;
  color:string="#ff7c00";
  colorBg:string;
  async ngOnInit(){
    this.allParams=await this.objectService.getParameters().toPromise();
    if (!this.maxScale) this.maxScale=8;
  this.dataSource=await this.getParams(this.inputParams);
  this.delta=this.dataSource[0].value-this.dataSource[1].value;
  if (this.delta>0){
    this.colorBg="#33a1ff";
  }else{
    this.colorBg="#a2e2ff";
  }
  (this.useAbs)? this.deltaTitle=Math.abs(this.delta):this.deltaTitle=this.delta;
  this.delta=Math.abs(this.delta)

}
//Костыль
allParams:any=[];
  async getParams(tags:string[]){
  let result:any[]=[];
  if( this.allParams) this.allParams=await this.objectService.getParameters().toPromise();
  for (let i=0;i<tags.length;i++){
    let curParam=this.allParams.find(item=>item.tag==tags[i]);
    let lastValue=await this.paramService.getValueLastByTag(tags[i],"Parameter").toPromise();
    curParam.date=moment(lastValue.date).format("DD:MM:YY HH:mm");
    curParam.value=lastValue.value;
    result.push(curParam);
}
return result
}
}
