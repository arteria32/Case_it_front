import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import ArrayStore from "devextreme/data/array_store";
import { CalculatorService } from "../../services/calculator-service";
import { ScriptSettingsService } from "../../services/srcipt-settings.service";

@Component({
  selector: 'information-case',
  templateUrl: './information-case.component.html',
  styleUrls: ['./information-case.component.scss'],
  providers: []
})

export class InformationCaseComponent implements OnInit {
  public visSet = false;
  curSettung: any[];
  dataInfoCase: any[];
  curIdObject = '843bc2da-8e0f-4e73-b4e0-b471d153279d';
  constructor(private http: HttpClient, private scriptService: ScriptSettingsService,public calcService:CalculatorService) {
  }
  widgetSet: any;
  async ngOnInit() {
    this.widgetSet = await this.http.get('assets/json/widget-map.json').toPromise();
    this.calcService.calc$.subscribe(async (item) => {
      console.log(item)
      if (item.type == "ccl") {
        this.widgetSet.widgetMap[0].value=item.value
      } else {
        this.widgetSet.widgetMap[1].value=item.value
      }
    })

    this.scriptService.selectedPlant$.subscribe(async (item) => {
      console.log(item)
      if (item == "Предсказание ЧП") {
        this.widgetSet = await this.http.get('assets/json/widget-map2.json').toPromise();
      } else {
        this.widgetSet = await this.http.get('assets/json/widget-map.json').toPromise();
      }
    })
  }
}
