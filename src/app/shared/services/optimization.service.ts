import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from './api.service';
import * as moment from 'moment';
import { Change } from '../models/i-change';
import { ConfigService } from './config.service';
import { EventInfo } from '../models/i-eventInfo';

@Injectable()
export class OptimizationService {
    lastDate: moment.Moment | undefined;
    preLastDate: moment.Moment | undefined
    constructor(private http: HttpClient, private apiService: ApiService, private configService: ConfigService) {
        setInterval(async () => {
            let events:EventInfo[] = await this.apiService.getListOfEvents(1).toPromise();
            let newLastDate = moment(events[0].date + 'Z');
            if (newLastDate.toString() != this.lastDate?.toString()) {
                this.lastDate=newLastDate;
               this.configService.changeAll();
            }
        }, 60000)
    }

    idObject: string = 'e0cc34a8-f4eb-4725-8cf8-cfe36ce5228c';

    async getNextCalcTime() {
        let events:EventInfo[] = await this.apiService.getListOfEvents(2).toPromise();
        this.lastDate = moment(events[0].date + 'Z');
        this.preLastDate = moment(events[1].date + 'Z');
        let timer = this.lastDate.diff(this.preLastDate, 'minutes');
        let nextDate = this.lastDate.clone();
        nextDate = nextDate.add(timer + 5, 'minutes');
        let result = nextDate.diff(moment(), 'm');
        return result
    }


    pushChanges(data: Change[]) {
        this.apiService.pushValuesByIdContract(data);
        this.configService.changeAll();
    }
}


