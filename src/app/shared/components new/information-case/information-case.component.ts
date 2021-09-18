import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: 'information-case',
  templateUrl: './information-case.component.html',
  styleUrls: ['./information-case.component.scss'],
  providers: []
})

export class InformationCaseComponent implements OnInit {
  public visSet = false;
  curSettung: any[];
  exampleWidgets = new ArrayStore({
    data:
      [{ "type": "list", "name": "Перечень параметров" },
      { "type": "loadingChart", "name": "Отслеживание параметра" },
      { "type": "modelChart", "name": "Сравнение параметров" },],
    key: "type"
  });
  dataInfoCase: any[];
  curIdObject = '843bc2da-8e0f-4e73-b4e0-b471d153279d';
  constructor(private http:HttpClient  ) {
  }
  widgetMap:any;
  async ngOnInit(): Promise<void> {
    this.widgetMap=await this.http.get('assets/json/widget-map.json').toPromise();
    console.log(this.widgetMap)
  }

}
