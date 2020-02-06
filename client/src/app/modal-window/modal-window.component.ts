import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicle } from '../Models/vehicle.model';
import { CarType } from '../Models/carType.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  newVehicle = new Vehicle();
  title: string;
  keys = Object.keys;
  carTypes = CarType;

  constructor(private dialogRef: MatDialogRef<ModalWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
     this.newVehicle = this.data.selectedVehicle;
     this.title = this.data.title;
  }

  saveVehicle(){
    if(this.isValidVehicle()){
      Swal.fire('Saved!', 'The vehicle has been saved', 'success').then(() => {
          this.dialogRef.close(this.newVehicle);
      });
    } else{
      Swal.fire('Error!', 'Please fill all the details', 'error');
    }
  }

  isValidVehicle(){
    return (this.newVehicle.name != undefined &&
            this.newVehicle.carType != undefined &&
            this.newVehicle.createdTime != undefined &&
            this.newVehicle.lastSuccessfulConnection != undefined)
  }
}
