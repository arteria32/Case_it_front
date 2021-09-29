import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculatorService } from '../../services/calculator-service';
import { ScriptSettingsService } from '../../services/srcipt-settings.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor(private scriptService:ScriptSettingsService,public http:HttpClient,public calculateService:CalculatorService) { 
  }
  selectedScript="Исходное состояние";
  scriptData=["Исходное состояние","Предсказание ЧП"]
  ngOnInit() {
  }
  dataSource:any
visCalc=false;
  async openCalc(){
    this.visCalc=true;
    this.dataSource= await this.http.get('assets/json/calc-config.json').toPromise(); 
    console.log(this.dataSource)

  }
  calculate(){
    console.log(this.dataSource)
    this.calculateService.calculateCCL(this.dataSource[5].value,this.dataSource[6].value,this.dataSource[7].value,this.dataSource[1].value,this.dataSource[4].value,this.dataSource[3].value);
    this.calculateService.calculateSchlum(this.dataSource[0].value,this.dataSource[1].value,this.dataSource[2].value,this.dataSource[5].value)
  }
  pushScript(e:any){
    console.log(e)
    this.scriptService.changePlant(e.value);
    }
}
