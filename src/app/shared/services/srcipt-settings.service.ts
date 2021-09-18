import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class ScriptSettingsService {
  constructor(private http: HttpClient, ) {
  }
  private static selectedPlant = new Subject<string>();
  private static selectedProd = new Subject<string>();
  selectedPlant$ = ScriptSettingsService.selectedPlant.asObservable();
  selectedProd$ = ScriptSettingsService.selectedProd.asObservable();
  changePlant(newPlant:string){
    ScriptSettingsService.selectedPlant.next(newPlant);
  }
  
}