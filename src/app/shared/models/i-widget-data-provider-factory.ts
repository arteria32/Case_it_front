import { IWidgetDataProvider } from './i-widget-data-provider';

export interface IWidgetDataProviderFactory{
    create(typeWidget:string):IWidgetDataProvider
  }
