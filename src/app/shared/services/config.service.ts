import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Series } from '../models/i-data-linechart';
import { environment } from 'src/environments/environment';
import { ScriptSettingsService } from './srcipt-settings.service';
import { WidgetDataProviderFactory } from '../classes/widget-data-provider';
import { ApiService } from './api.service';
import { config, Subject } from 'rxjs';
import { error } from 'protractor';
import { ConfigWidget } from '../models/i-widge-config';

@Injectable()
export class ConfigService {
  static arrayofWidgetes: any[] = [];
  widgetsList: any[] = []
  public static updateWidgetData = new Subject<any>();
  updateWidgetData$ = ConfigService.updateWidgetData.asObservable();



  constructor(private http: HttpClient,
    private scriptService: ScriptSettingsService,
    private apiService: ApiService
  ) {
    this.init();
    setInterval(async () => {
      this.changeAll()
    }, 300000)

    this.changeWidget.subscribe((item: any) => this.updateData(item))
    scriptService.selectedPlant$.subscribe(item => {
      this.changeWidget.emit();
        //замена ид объекта
/*         this.idObject=item
 */    })
  }
  dataProviderFactory = new WidgetDataProviderFactory(this.apiService)
  idObject: string = 'e0cc34a8-f4eb-4725-8cf8-cfe36ce5228c';
  changeWidget: EventEmitter<any> = new EventEmitter();


  async init() {
/*     this.changeAll()
 */  }

  //провайдер возвращает интерфейс
  //передавать в гет конфиг класс

  async changeAll() {
    const promises = this.widgetsList.map(async (item) => this.updateData(item));
    await Promise.all(promises);
  }


  async updateData(configWidget: ConfigWidget) {
    let newProvider = this.dataProviderFactory.create(configWidget.typeWidgetProvider);
    let configFile: any;
    try {
      configFile = await this.apiService.getConfig(configWidget.widgetName, this.idObject);
    } catch (error) {
    }
    let newData = await newProvider.provide(configFile);
    let body = {
      widgetName: configWidget.widgetName,
      newDataSource: newData
    }
    ConfigService.updateWidgetData.next(body)

  }

  initNewWidget(item: ConfigWidget) {
    this.widgetsList.push(item);
    this.updateData(item);
  }

}
