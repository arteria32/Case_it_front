import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'status-info-widget',
  templateUrl: './status-info-widget.component.html',
  styleUrls: ['./status-info-widget.component.scss']
})
export class StatusInfoWidgetComponent implements OnInit {
 dataSource:any;
 constructor(private http:HttpClient){

 }
  async ngOnInit(): Promise<void> {
    this.dataSource=await this.http.get('assets/json/status-info.json').toPromise()
    console.log(this.dataSource)
  }
}
