import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { EventInfo } from '../../models/i-eventInfo';

/* import * as FileSaver from 'file-saver';
 */@Component({
  selector: 'recom-list-widget',
  templateUrl: './recom-list-widget.component.html',
  styleUrls: ['./recom-list-widget.component.scss']
})

export class RecomListWidgetComponent {
  visRecomInfo = false;
  dataRecom: any = [];
  staticInformationDa = [];
  statusInfoLookup = [
    {
      id: 1, status: 'RTO'
    }]

  public configWidget = {
    widgetName: "RecomList",
    typeWidgetProvider: 'ContextParam'
  }
  dataSource: EventInfo[] = [];
  constructor() {
  
  }


}
