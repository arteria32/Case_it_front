import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { config } from "node:process";
import { Series } from "../models/i-data-linechart";
import { ParameterGraph } from "../models/i-param-graph";
import { Value } from "../models/i-values";
import { ApiService } from "./api.service";

@Injectable()
export class OptimizationChartService {
    constructor(private http: HttpClient, private apiService: ApiService) {
    }



    async updateDate(oldParm:Series,newDate:string){
        ///Костыль?использовать теги по интервалу
        let interval=Math.abs(moment().diff(moment(newDate),'days'));
        console.log(interval)
        let newParam=oldParm;
            let dataTag: Value[] = await this.apiService.getValuesByTagWithLimit(oldParm.tag, (1+interval)*24).toPromise();
            let curDay = moment(newDate).format('D');
            dataTag = dataTag.filter((item: any) => moment(item.date + 'Z').format('D') == curDay);
            newParam.valueArray= dataTag.map((item: any) => Math.round(item.value * 100) / 100);
            newParam.argumentArray=dataTag.map((item: Value) => moment(item.date + 'Z').startOf('minute'));
            console.log(newParam)
        return newParam 
    }
}