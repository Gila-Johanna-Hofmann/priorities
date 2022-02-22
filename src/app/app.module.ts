import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeedListComponent } from './need-list/need-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WantListComponent } from './want-list/want-list.component';
import { PurchasedListComponent } from './purchased-list/purchased-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NeedListComponent,
    InputFormComponent,
    WantListComponent,
    PurchasedListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
