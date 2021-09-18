import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';


@Injectable()
export class NotificationsService {
    constructor(){}
    notify(message:string){
    alert(message)
}
}