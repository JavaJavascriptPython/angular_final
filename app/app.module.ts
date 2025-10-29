import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';
import { TpsComponent } from './pages/tps/tps.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    CardsComponent,
    ChartsComponent,
    TableComponent,
    TpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }