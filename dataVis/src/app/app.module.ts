import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstVueComponent } from './visualisation/first-vue/first-vue.component';
import { SecondVueComponent } from './visualisation/second-vue/second-vue.component';
import { ThirdVueComponent } from './visualisation/third-vue/third-vue.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LineChartComponent } from './visualisation/line-chart/line-chart.component'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from "@angular/material/tooltip";
import { PieChartComponent } from './visualisation/pie-chart/pie-chart.component';
import { BarChartComponent } from './visualisation/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstVueComponent,
    SecondVueComponent,
    ThirdVueComponent,
    SidenavComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatTooltipModule,
        GoogleChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
