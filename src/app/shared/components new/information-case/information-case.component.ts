import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import ArrayStore from "devextreme/data/array_store";
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
  constructor(private http: HttpClient, private scriptService: ScriptSettingsService) {
  }
  widgetSet: any;
  async ngOnInit() {
    this.widgetSet = await this.http.get('assets/json/widget-map.json').toPromise();
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
