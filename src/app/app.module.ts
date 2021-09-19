import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule, DxSelectBoxModule, DxListModule, DxSwitchModule, DxDataGridModule, DxPopupModule, DxScrollViewModule, DxLoadIndicatorModule, DxCircularGaugeModule,
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkSchemeWidgetComponent } from './shared/components new/work-scheme/work-scheme-widget.component';
import { ApiService } from './shared/services/api.service';
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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecomListWidgetComponent,
    WorkSchemeWidgetComponent,
    MainHeaderComponent,
    InformationCaseComponent,
    ModelWidgetComponent,
    ListWidgetComponent,
    LoadWidgetComponent,ModelWidgetComponent,StatusInfoWidgetComponent
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
  providers: [ApiService,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
