import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { element } from 'protractor';
import { BehaviorSubject, Subject } from 'rxjs';
import { Change } from '../models/i-change';
import * as moment from 'moment';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Parameter } from '../models/i-param';
import { ParameterCurValue } from '../models/i-param-curValue';

@Injectable()
export class CalcPredictionService {
    constructor(private apiService: ApiService) {
        this.checkStatusCalc();
        let timerId = setInterval(() => {
            this.checkStatusCalc();
        }, 60000);
    }
    configParamTechMode: any;
    idObject: string = 'e0cc34a8-f4eb-4725-8cf8-cfe36ce5228c';
    typeCalc = "sdo_Hysys"
    public statusCalc = new BehaviorSubject<any>(false);
    // Observable string streams
    public statusCalc$ = this.statusCalc.asObservable();
    async getDataForCalc() {
        this.configParamTechMode = await this.apiService.getConfig("ParamTechModeCalc", this.idObject)
        let data: Parameter[] = [];
        let paramsOfTtype: ParameterCurValue[];
        let type = '';

        for (let index = 0; index < this.configParamTechMode.length; index++) { 
            type = this.configParamTechMode[index].type;
            paramsOfTtype = await this.apiService.getCurrentValueByNames(this.configParamTechMode[index].tags).toPromise();
            if (paramsOfTtype) {
                for (let index = 0; index < paramsOfTtype.length; index++) {
                    data.push({
                        alias:paramsOfTtype[index].tag,
                        tag: paramsOfTtype[index].tag,
                        description: paramsOfTtype[index].description,
                        unit: paramsOfTtype[index].unit,
                        factValue: (paramsOfTtype[index].points[0]) ? paramsOfTtype[index].points[0].v : 0,
                        type: type,
                        date:'',
                        name:paramsOfTtype[index].tag,
                        tags:[]
                    })
                }
            }
        }
        return data
    }
    async checkStatusCalc() {
     /*    let oldStatus = this.statusCalc.getValue();
        let newStatus = await this.apiService.getCanCalc(this.typeCalc).toPromise().then(item => item.canCalc);
        let lastTime = await this.apiService.getLastTimeCalc().toPromise().then((item: any) => moment(item.date + 'Z'))
        let delta = moment().diff(lastTime, 'm');
        if (newStatus != oldStatus) this.statusCalc.next(newStatus)
    if (delta > 15) this.statusCalc.next(true) */
    this.statusCalc.next(true)
    }

    async calculate(data: Change[]) {
        this.statusCalc.next(false);
        this.apiService.postLastTimeCalc(moment().valueOf().toString());
        let reslut:any= await this.apiService.pushValuesToCalcUser(data);
        let tags=reslut.Data.map((item:any)=>item.Tag);
        let paramsOfTtype:ParameterCurValue[] = await this.apiService.getCurrentValueByNames(tags).toPromise();
        for (let index = 0; index < reslut.Data.length; index++) { 
            reslut.Data[index].Unit=paramsOfTtype[index].unit
        }
        return reslut
    }
}
