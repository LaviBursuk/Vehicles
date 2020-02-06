import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(){}

  AllVehicles:any = [];
  filteredVehicles:any = [];

  ngOnInit(){
  }
}
