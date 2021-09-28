import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectStatus } from '../../models/i-project-status';


@Component({
  selector: 'system-condition-widget',
  templateUrl: './system-condition-widget.component.html',
  styleUrls: ['./system-condition-widget.component.scss']
})
export class SystemConditionWidgetComponent implements OnInit{
    dataSource: any
    constructor(public http:HttpClient) {
    }
  async ngOnInit() {
    this.dataSource = await this.http.get('assets/json/drill-plant-data.json').toPromise();
  }
}
