export interface Parameter {
    alias: string,
    description: string,
    tag: string,
    unit: string,
    factValue: number,
    name: string,
    date: string;
    tags:{
        typeValue:string,
        tagValue:string
    }[];
    [values: string]: any;
}