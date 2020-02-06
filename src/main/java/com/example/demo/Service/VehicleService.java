package com.example.demo.Service;

import com.example.demo.DAO.VehicleDao;
import com.example.demo.Entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.UUID;

@Service
public class VehicleService {

    @Autowired
    private VehicleDao vehicleDao;

    public Collection<Vehicle> getAllVehicles(){
        return this.vehicleDao.getAllVehicles();
    }

    public Vehicle getVehicleById(UUID id){
        return vehicleDao.getVehicleById(id);
    }

    public Vehicle addVehicle(Vehicle vehicle){ return vehicleDao.addVehicle(vehicle); }

    public Vehicle updateVehicle(Vehicle vehicle){ return vehicleDao.updateVehicle(vehicle); }

    public Vehicle deleteVehicle(UUID id){ return vehicleDao.deleteVehicle(id); }
}
