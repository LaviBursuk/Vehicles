import { Component, OnInit, Output } from '@angular/core';
import { VehicleService } from '../ClientServices/vehicle.service';
import { MainPageComponent } from '../main-page/mainPage.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { Vehicle } from '../Models/vehicle.model';
import { CarType } from '../Models/carType.enum';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  newVehicle = new Vehicle();
  showPlaceHolder = true;
  sortType = "older";
  modalText = "Add new vehicle!";

  constructor(private service: VehicleService, private mainPage: MainPageComponent, private dialog: MatDialog) { }

  ngOnInit() {
    this.refreshVehicles();
  }

  sortVehicles(){
    if(this.sortType === "newer"){
      this.mainPage.AllVehicles.sort((a, b) => { return b.createdTime - a.createdTime});
    }
    else if(this.sortType === "older"){
      this.mainPage.AllVehicles.sort((a, b) => { return a.createdTime - b.createdTime});
    }
    else{
      this.mainPage.AllVehicles.sort((a, b) => { return b.lastSuccessfulConnection - a.lastSuccessfulConnection});
    }
  }

  refreshVehicles(){
    this.service.getAllVehicles().subscribe(data => {
      this.mainPage.AllVehicles = data;
      this.mainPage.filteredVehicles = data;
      this.sortVehicles();
      });
  }

  deleteVehicle(id){
    Swal.fire({
          title:              'Are you sure?',
          text:               "You won't be able to revert this!",
          icon:               'warning',
          showCancelButton:   true,
          confirmButtonColor: '#2fc5f2',
          cancelButtonColor:  '#f14e4e',
          confirmButtonText:  'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.service.deleteVehicle(id).subscribe((data) => {
              this.refreshVehicles();
              if (this.mainPage.AllVehicles.length === 1){
                this.showPlaceHolder = false;
              }});
            Swal.fire(
              'Deleted!',
              'The vehicle has been deleted',
              'success'
            )
          }
    })
  }

  // open the modal window
  openDialog(selectedVehicle): void {
    if(selectedVehicle.id != undefined){
      this.modalText = "Details";
      selectedVehicle.createdTime              = this.convertDate(selectedVehicle.createdTime);
      selectedVehicle.lastSuccessfulConnection = this.convertDate(selectedVehicle.lastSuccessfulConnection);
    } else{
      this.modalText = "Add new vehicle!";
    }

    const dialogRef = this.dialog.open(ModalWindowComponent, {data: {"selectedVehicle": selectedVehicle, "title": this.modalText}});

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
          result.createdTime              = Date.parse(result.createdTime);
          result.lastSuccessfulConnection = Date.parse(result.lastSuccessfulConnection);

          if(result.id == undefined){
            result.id = null;
            this.service.addVehicle(result).subscribe((data) => {
              this.refreshVehicles();
              this.newVehicle = new Vehicle();
                if (this.mainPage.AllVehicles.length === 0){
                  this.showPlaceHolder = true;
                }
              });
          }
          else{
            this.service.updateVehicle(result).subscribe((data) => this.refreshVehicles());
          }
      }
      else{
          this.newVehicle = new Vehicle();
      }
    });
  }

  // convert the epoch to displayable date
  convertDate(date){
    let convertedDate = new Date(date);
    return convertedDate.getFullYear() + '-' +
           ((convertedDate.getMonth() < 9 ? '0' : '') +
           (convertedDate.getMonth() + 1)) + '-' +
           ((convertedDate.getDate() < 10 ? '0' : '') + convertedDate.getDate());
  }
}
