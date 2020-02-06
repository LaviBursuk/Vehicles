import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../Models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = '/';

  constructor(private http: HttpClient){}

  public getAllVehicles(){
    return this.http.get(this.baseUrl + 'vehicles');
  }

  public getVehicleById(id){
      return this.http.get(this.baseUrl + 'vehicles/' + id);
  }

  public addVehicle(vehicle){
        return this.http.post(this.baseUrl + 'vehicles/', vehicle);
  }

  public updateVehicle(vehicle){
        return this.http.put(this.baseUrl + 'vehicles/', vehicle);
  }

  public deleteVehicle(id){
          return this.http.delete(this.baseUrl + 'vehicles/' + id);
  }
}
