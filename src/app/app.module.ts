import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
