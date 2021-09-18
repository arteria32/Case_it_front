import { ApiService } from '../services/api.service';

export class ListStrategyManager {
    config?: any;
    dataSource: any;
    
    constructor(private apiService:ApiService ){

    }
    async init(config?: any) {
        return await this.apiService.getHealthStatus().toPromise();
    }
    update(config: any): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    
}