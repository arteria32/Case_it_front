export interface Parameter {
    alias: string,
    description: string,
    tag: string,
    unit: string,
    factValue: number,
    name: number,
    date: string;
    [propName: string]: any;
}