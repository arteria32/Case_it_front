
import { ConfigService } from '../services/config.service';
import { ConfigWidget } from './i-widge-config';






export class WidgetManager {
  public configWidget: ConfigWidget;
  public dataSource: any[] | any;
  constructor(public configService: ConfigService) {

  }

  init(configWidget: ConfigWidget) {
    this.configService.initNewWidget(configWidget)
  }
}