"use strict";
// Vehicle base class
class Vehicle {
    constructor(brand, model, pricePerDay) {
        this.brand = brand;
        this.model = model;
        this.pricePerDay = pricePerDay;
    }
    getRentalInfo() {
        return `${this.brand} ${this.model} - ₹${this.pricePerDay}/day`;
    }
}
// Car class
class Car extends Vehicle {
    constructor(brand, model, pricePerDay, seats, hasAC) {
        super(brand, model, pricePerDay);
        this.seats = seats;
        this.hasAC = hasAC;
    }
    getRentalInfo() {
        return `Car: ${super.getRentalInfo()}, Seats: ${this.seats}, AC: ${this.hasAC ? "Yes" : "No"}`;
    }
}
// Bike class
class Bike extends Vehicle {
    constructor(brand, model, pricePerDay, gearType) {
        super(brand, model, pricePerDay);
        this.gearType = gearType;
    }
    getRentalInfo() {
        return `Bike: ${super.getRentalInfo()}, Gear Type: ${this.gearType}`;
    }
}
// Rental Manager
class RentalManager {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    listVehicles() {
        console.log("Available Vehicles:");
        this.vehicles.forEach((v, index) => {
            console.log(`${index + 1}. ${v.getRentalInfo()}`);
        });
    }
    bookVehicle(index) {
        if (index >= 0 && index < this.vehicles.length) {
            const booked = this.vehicles.splice(index, 1)[0];
            console.log(`Booked: ${booked.getRentalInfo()}`);
        }
        else {
            console.log("Invalid vehicle selection.");
        }
    }
}
const manager = new RentalManager();
const car1 = new Car("Bmw", "mercedes", 5000, 7, true);
const bike1 = new Bike("Yamaha", "ninja", 1000, "Manual");
manager.addVehicle(car1);
manager.addVehicle(bike1);
manager.listVehicles();
manager.bookVehicle(0);
manager.listVehicles();
