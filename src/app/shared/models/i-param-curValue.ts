export interface ParameterCurValue{
    alias: string,
    description: string,
    tag:string,
    unit:string,
    factValue: number,
    name: string,
    planValue: number,
    points:{
    d:string,
    v:number
    }[]

}