import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { data } from 'jquery';
import { ParameterCalc } from '../models/i-param-calc';
import { EventInfo } from '../models/i-eventInfo';

@Injectable()
export class RecomListService {
    constructor(private apiService: ApiService) {
    }
    staticInfoDataSource: any[] = [];
    staticControllersDataSource: any[] = [];
    async getInfoOfEvent(event: any):Promise<any> {
        switch (event.eventType.id) {
            case 0:
                return this.getOptimumEventInfo(event.id);
            case 10:
                return this.getConfigChangeEventInfo(event.id);
        }

    }
    idObject: string = 'e0cc34a8-f4eb-4725-8cf8-cfe36ce5228c';

    private async getOptimumEventInfo(idEvent: number):Promise<ParameterCalc[]> {
        let data: ParameterCalc[] = [];
        let newData: any = await this.apiService.getInfoOfEvent(idEvent).toPromise();
        if (this.staticInfoDataSource.length == 0) {
            let tags = newData.Data.map((item: any) => item.Tag)
            this.staticInfoDataSource = this.groupBy(await this.apiService.getCurrentValueByNames(tags).toPromise(), 'alias');
        }
        if (this.staticControllersDataSource.length == 0) {
            this.staticControllersDataSource = await this.apiService.getConfig('RecomListControllers', this.idObject)
        }
        for (let index = 0; index < newData.Data.length; index++) {
            let description = '';
            let unit = '';
            if (this.staticInfoDataSource[newData.Data[index].Tag]) {
                description = this.staticInfoDataSource[newData.Data[index].Tag][0].description;
                unit = this.staticInfoDataSource[newData.Data[index].Tag][0].unit;
            }
            let controller = this.staticControllersDataSource.find(item => item.tags.some((tag: any) => tag.includes(newData.Data[index].Tag.split(':')[0])))
            data.push({
                tag: newData.Data[index].Tag,
                description: description,
                unit: unit,
                factValue: newData.Data[index].Fact,
                optValue: newData.Data[index].Optim,
                lbValue: newData.Data[index].Lb,
                ubValue: newData.Data[index].Ub,
                scaleMax:newData.Data[index].ScaleMax,
                scaleMin:newData.Data[index].ScaleMin,
                controller: controller.name + ' | ' + controller.task,
                statusInfo:newData.Data[index].StatusInfo
            })
        }
        console.log(data)
        return data
    }
    async getConfigChangeEventInfo(idEvent:number):Promise<String[]>{
        let info=await this.apiService.getInfoOfEventRow(idEvent).toPromise().then((item:any)=>JSON.parse(item.inputData));
        let data:String[]=[]
        for (let index = 0; index < info.length; index++) {
            data.push( 'Изменили значение параметра: '+info[index].Tag+' = '+info[index].Value)
        }
        return data
    }   
    async updateData(dataSource:any,length:number){
        return await this.apiService.getListOfEvents(20,length).toPromise();
    }
    groupBy(xs: any, key: string): any[] {
        return xs.reduce(function (rv: any, x: any) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
}
