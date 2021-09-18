import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "./api.service";

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) {
    }
///Разобраться со спамом
    public accessList = new BehaviorSubject<any>(false);
    // Observable string streams
    public accessList$ = this.accessList.asObservable();
    
    async logIn() {
        console.log('logIn')
        let statAccessList:any;
        try {
            statAccessList= await this.apiService.getAccessList().toPromise();
        } catch (error) {
            console.log(error)
            statAccessList = {premissons:[]}
        }
        this.accessList.next(statAccessList)
    }
    checkAccess(claim: string) {
        if (this.accessList.getValue().premissions.includes('CanAll')) return true
        return this.accessList.getValue().premissions.includes(claim)
    }
}