import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule, DxSelectBoxModule, DxListModule, DxSwitchModule, DxDataGridModule, DxPopupModule, DxScrollViewModule, DxLoadIndicatorModule, DxCircularGaugeModule,
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DxoScrollBarModule } from 'devextreme-angular/ui/nested';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecomListWidgetComponent } from './shared/components new/recom-list/recom-list-widget.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './shared/components new/main-header/main-header.component';
import { InformationCaseComponent } from './shared/components new/information-case/information-case.component';
import { ModelWidgetComponent } from './shared/components new/information-case/widgets/model-widget/model-widget.component';
import { ListWidgetComponent } from './shared/components new/information-case/widgets/list-widget/list-widget.component';
import { LoadWidgetComponent } from './shared/components new/information-case/widgets/load-widget/load-widget.component';
import { StatusInfoWidgetComponent } from './shared/components new/status-infobar/status-info-widget.component';
import { ScriptSettingsService } from './shared/services/srcipt-settings.service';
import { SystemConditionWidgetComponent } from './shared/components new/system-condition/system-condition-wdget.component';
import { LineChartWidgetComponent } from './shared/components new/line-chart/line-chart-widget.component';
import { CalculatorService } from './shared/services/calculator-service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecomListWidgetComponent,
    MainHeaderComponent,
    InformationCaseComponent,
    ModelWidgetComponent,
    ListWidgetComponent,
    LoadWidgetComponent,ModelWidgetComponent,StatusInfoWidgetComponent,SystemConditionWidgetComponent,LineChartWidgetComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxListModule,
    HttpClientModule,
    DxSwitchModule,
    DxoScrollBarModule,
    DxDataGridModule,
    MatButtonToggleModule,  
    FormsModule,
    DxPopupModule,
    DxScrollViewModule,
    DxLoadIndicatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DxCircularGaugeModule,
  ],
  providers: [ScriptSettingsService,CalculatorService,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
