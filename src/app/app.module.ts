import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { BarchartsComponent } from './dashboard/barcharts/barcharts.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PiechartsComponent } from './dashboard/piecharts/piecharts.component';
import { FirstgridComponent } from './dashboard/firstgrid/firstgrid.component';
import { SecondgridComponent } from './dashboard/secondgrid/secondgrid.component';
import { ThirdgridComponent } from './dashboard/thirdgrid/thirdgrid.component';
import { MainmapComponent } from './dashboard/mainmap/mainmap.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DashboardComponent,
    BarchartsComponent,
    PiechartsComponent,
    FirstgridComponent,
    SecondgridComponent,
    ThirdgridComponent,
    MainmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzCardModule,
    NzTableModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzRadioModule,
    NgxEchartsModule.forRoot({
      echarts
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
