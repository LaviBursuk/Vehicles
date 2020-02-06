import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../ClientServices/vehicle.service';
import { MainPageComponent } from '../main-page/mainPage.component';
import { CarType } from '../Models/carType.enum';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  keys     = Object.keys;
  carTypes = CarType;

  inputName               = "";
  inputType               = "";
  inputCreateFrom         = "";
  inputCreateTo           = "";
  inputLastConnectionFrom = "";
  inputLastConnectionTo   = "";

  constructor(private service: VehicleService, private mainPage: MainPageComponent) { }

  ngOnInit() {
  }

  filterVehicles(){
      this.mainPage.filteredVehicles = this.mainPage.AllVehicles;
      this.mainPage.filteredVehicles = this.mainPage.AllVehicles.filter((vehicle) =>
          ((vehicle.name === this.inputName || this.inputName  === "") &&
          (vehicle.carType === this.inputType || this.inputType  === "") &&
          (vehicle.createdTime >= this.inputCreateFrom || this.inputCreateFrom === "") &&
          (vehicle.createdTime <= this.inputCreateTo || this.inputCreateTo === "") &&
          (vehicle.lastSuccessfulConnection >= this.inputLastConnectionFrom || this.inputLastConnectionFrom === "") &&
          (vehicle.lastSuccessfulConnection <= this.inputLastConnectionTo || this.inputLastConnectionTo === "")));
  }

  refreshVehicles(){
      this.service.getAllVehicles().subscribe(data => {
        this.mainPage.AllVehicles = data;
        this.mainPage.filteredVehicles = data;
      });
  }

  clearFilters(){
    this.inputName                = "";
    this.inputType                = "";
    this.inputCreateFrom          = "";
    this.inputCreateTo            = "";
    this.inputLastConnectionFrom  = "";
    this.inputLastConnectionTo    = "";
    this.refreshVehicles();
  }
}
