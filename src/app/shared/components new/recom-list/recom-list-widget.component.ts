import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { EventInfo } from '../../models/i-eventInfo';

/* import * as FileSaver from 'file-saver';
 */@Component({
  selector: 'recom-list-widget',
  templateUrl: './recom-list-widget.component.html',
  styleUrls: ['./recom-list-widget.component.scss']
})

export class RecomListWidgetComponent implements OnInit {
  dataSource: any;
  constructor(private http: HttpClient) {

  }
  async ngOnInit() {
    this.dataSource = await this.http.get('assets/json/recom-list.json').toPromise()
  }


}
