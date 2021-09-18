import { Moment } from "moment";

export interface Series{
    seriesName:string,
    tag:string,
    valueArray:number[],
    argumentArray:Moment[],
    unit:string,
    styleLine:{
        color:string,
        dashStyle:string,
        width:number
    },
    stylePoint:{
        color:string,
        size:number
    }
}