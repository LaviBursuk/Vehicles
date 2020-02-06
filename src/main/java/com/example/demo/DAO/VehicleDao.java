package com.example.demo.DAO;

import com.example.demo.Entity.Vehicle;
import com.example.demo.Enum.CarType;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Repository
public class VehicleDao {
    private static Map<UUID, Vehicle> vehicles;

    // data keys for example
    private static UUID firstKey = UUID.randomUUID();
    private static UUID secondKey = UUID.randomUUID();
    private static UUID thirdKey = UUID.randomUUID();

    static {
        vehicles = new HashMap<UUID, Vehicle>(){
            {
                // data for example
                put(firstKey, new Vehicle(firstKey, "first SUV", System.currentTimeMillis(), CarType.SUV, System.currentTimeMillis()));
                put(secondKey, new Vehicle(secondKey, "first hybrid", System.currentTimeMillis(), CarType.Hybrid, System.currentTimeMillis()));
                put(thirdKey, new Vehicle(thirdKey, "second SUV", System.currentTimeMillis(), CarType.SUV, System.currentTimeMillis()));
            }
        };
    }

    public Collection<Vehicle> getAllVehicles(){
        return this.vehicles.values();
    }

    public Vehicle getVehicleById(UUID id){
        return this.vehicles.get(id);
    }

    public Vehicle addVehicle(Vehicle vehicle){
        vehicle.setId(UUID.randomUUID());
        return this.vehicles.put(vehicle.getId(), vehicle);
    }

    public Vehicle updateVehicle(Vehicle vehicle) {
        Vehicle oldVehicle = this.vehicles.get(vehicle.getId());
        oldVehicle.setName(vehicle.getName());
        oldVehicle.setCreatedTime(vehicle.getCreatedTime());
        oldVehicle.setCarType(vehicle.getCarType());
        oldVehicle.setLastSuccessfulConnection(vehicle.getLastSuccessfulConnection());
        return this.vehicles.put(vehicle.getId(), vehicle);
    }

    public Vehicle deleteVehicle(UUID id) { return this.vehicles.remove(id); }
}
