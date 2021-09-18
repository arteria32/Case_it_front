import { Series } from "./i-data-linechart";
import { Parameter } from "./i-param";

export interface ParameterGraph{
    curentValue:Parameter;
    seriesData:Series[]
}