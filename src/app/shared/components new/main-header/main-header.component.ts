import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScriptSettingsService } from '../../services/srcipt-settings.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor(private scriptService:ScriptSettingsService) { 
  }
  selectedScript="Исходное состояние";
  scriptData=["Исходное состояние","Предсказание ЧП"]
  ngOnInit() {
  }
  pushScript(e:any){
  console.log(e)
  this.scriptService.changePlant(e.value);
  }
}
