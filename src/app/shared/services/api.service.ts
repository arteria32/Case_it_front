import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ObjectPlant } from '../models/i-object-plant';
import { HealthLog } from '../models/i-health-log';
import { Change } from '../models/i-change';
import * as moment from 'moment';
import { ParameterCurValue } from '../models/i-param-curValue';
import { EventInfo } from '../models/i-eventInfo';
import { ParameterCalc } from '../models/i-param-calc';
import { Value } from '../models/i-values';
import { AccessList } from '../models/i-accessList';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

 
}