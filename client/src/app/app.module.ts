import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/mainPage.component';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    MainPageComponent,
    TopBarComponent,
    SearchCardComponent,
    VehicleListComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalWindowComponent
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
