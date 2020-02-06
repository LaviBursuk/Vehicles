package com.example.demo.Controller;

import com.example.demo.Entity.Vehicle;
import com.example.demo.Service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("vehicles")
    public Collection<Vehicle> getAllVehicles(){ return vehicleService.getAllVehicles(); }

    @GetMapping("vehicles/{id}")
    public Vehicle getVehicleById(@PathVariable UUID id){
        return vehicleService.getVehicleById(id);
    }

    @PostMapping(path = "vehicles", consumes = "application/json", produces = "application/json")
    public Vehicle addvehicle(@RequestBody Vehicle vehicle){
        return vehicleService.addVehicle(vehicle);
    }

    @PutMapping(path = "vehicles", consumes = "application/json", produces = "application/json")
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("vehicles/{id}")
    public Vehicle deleteVehicle(@PathVariable UUID id){
        return vehicleService.deleteVehicle(id);
    }
}
