export interface ParameterCalc{
    tag: string,
    description: string,
    factValue: number,
    optValue?: number,
    planValue?: number,
    deltaValue?: number,
    ubValue: number,
    lbValue: number,
    scaleMax?:number,
    scaleMin?:number,
    controller?:string,
    statusInfo?:number,
    unit: string,
    weightValue?: number,
    stepValue?:  number,
    tags?:{  
        factValueTag:string,
        optValueTag:string,
        planValueTag:string,
        deltaValueTag:string,
        ubValueTag:string,
        lbValueTag:string,
        weightValueTag:string,
        stepValueTag:string
    }
}