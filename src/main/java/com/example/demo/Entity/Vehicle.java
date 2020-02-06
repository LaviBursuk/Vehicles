package com.example.demo.Entity;
import com.example.demo.Enum.CarType;
import java.util.UUID;

public class Vehicle {
    private UUID id;
    private String name;
    private long createdTime;
    private CarType carType;
    private long lastSuccessfulConnection;

    public Vehicle() {}

    public Vehicle(UUID id, String name, long createdTime, CarType carType, long lastSuccessfulConnection) {
        this.id = id;
        this.name = name;
        this.createdTime = createdTime;
        this.carType = carType;
        this.lastSuccessfulConnection = lastSuccessfulConnection;
    }

    public UUID getId() { return id; }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getCreatedTime() { return createdTime; }

    public void setCreatedTime(long createdTime) {
        this.createdTime = createdTime;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public long getLastSuccessfulConnection() {
        return this.lastSuccessfulConnection;
    }

    public void setLastSuccessfulConnection(long lastSuccessfulConnection) {
        this.lastSuccessfulConnection = lastSuccessfulConnection;
    }
}
