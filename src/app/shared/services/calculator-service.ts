import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class CalculatorService {
  constructor(private http: HttpClient ) {
  }

  private static calc = new Subject<any>();
  calc$ = CalculatorService.calc.asObservable();
calculateCCL(MW:number,PV:number,YP:number,GPM:number,iD:number,oD:number):number{
    MW=MW*0.010022;
    YP=YP*20885.4;
    GPM=GPM*4.40286;
    iD=iD*0.0394;
    oD=oD*0.0394;
    let n=3.22*Math.log10((2*PV+YP)/(PV+YP));
    let K=511^(1-n)*(PV+YP);
    let ClearenceArea= Math.PI/4*(iD^2-oD^2)/144
    let Av=GPM/(7.481*ClearenceArea);
    let result=(MW*K*Av)/40000
    CalculatorService.calc.next({
        "type":"ccl",
        value:result
    });

    return result
}

calculateSchlum(ROP:number,GPM:number,iDH:number,oD:number):number{
    GPM=GPM*4.40286;
    iDH=iDH*0.0394;
    oD=oD*0.0394;
    ROP=3,28*ROP;
    let V_ann=24.5*GPM/(iDH^2-oD^2)
    let V_cr=60/(1-(oD/iDH)^2*(0.64+18.16/ROP))
    let V_sc=V_ann-V_cr
    let TR=(1-V_sc/V_ann)
    let result=(ROP*iDH^2)/1471/GPM/TR
    CalculatorService.calc.next({
        "type":"schlum",
        value:result
    });
    return result
}

}