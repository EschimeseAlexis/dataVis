import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstVueComponent } from './visualisation/first-vue/first-vue.component';
import { SecondVueComponent } from './visualisation/second-vue/second-vue.component';
import { ThirdVueComponent } from './visualisation/third-vue/third-vue.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from "@angular/material/tooltip";
import { LeafletModule  } from '@asymmetrik/ngx-leaflet';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService, SelectionService, AnnotationsService, ZoomService } from '@syncfusion/ej2-angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstVueComponent,
    SecondVueComponent,
    ThirdVueComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    LeafletModule,
    MapsModule,
  ],
  providers: [
    LegendService,
    MarkerService,
    MapsTooltipService,
    DataLabelService,
    BubbleService,
    NavigationLineService ,
    SelectionService,
    AnnotationsService,
    ZoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
