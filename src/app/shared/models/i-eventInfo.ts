export interface EventInfo {
    id: number,
    idEventType: number,
    idResult: number,
    date:string,
    content:string,
    eventLevel:string,
    eventType:{
        id:number,
        name:string
    }
}