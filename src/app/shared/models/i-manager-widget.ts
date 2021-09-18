import { ConfigService } from '../services/config.service';


export interface IWidgetManager{
    initConfig(config:any):void;
    getDataSource(): any;
    initDataSource(data:any):void ;
    clear(): void;
  }
  
  export function ExtendsToWidgetArray(): (...args: any[]) => void {
      return (target: object): void => {
          ConfigService.arrayofWidgetes.push(
              target,
          );
      }
  }
