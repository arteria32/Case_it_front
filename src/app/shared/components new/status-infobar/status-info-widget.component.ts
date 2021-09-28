import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ScriptSettingsService } from '../../services/srcipt-settings.service';

@Component({
  selector: 'status-info-widget',
  templateUrl: './status-info-widget.component.html',
  styleUrls: ['./status-info-widget.component.scss']
})
export class StatusInfoWidgetComponent implements OnInit {
 dataSource:any;
 constructor(private http:HttpClient,private scriptService:ScriptSettingsService){

 }
  async ngOnInit(): Promise<void> {
    this.dataSource = await this.http.get('assets/json/info-drill-1.json').toPromise();
    console.log(this.dataSource)
    this.scriptService.selectedPlant$.subscribe(async (item) => {
      console.log(item)
        this.dataSource = await this.http.get('assets/json/info-drill-1.json').toPromise();
    })
  }
}
