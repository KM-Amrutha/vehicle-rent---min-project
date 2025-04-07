// Vehicle base class
class Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public pricePerDay: number
    ) {}

    getRentalInfo(): string {
        return `${this.brand} ${this.model} - ₹${this.pricePerDay}/day`;
    }
}

// Car class
class Car extends Vehicle {
    constructor(
        brand: string,
        model: string,
        pricePerDay: number,
        public seats: number,
        public hasAC: boolean
    ) {
        super(brand, model, pricePerDay);
    }

    override getRentalInfo(): string {
        return `Car: ${super.getRentalInfo()}, Seats: ${this.seats}, AC: ${this.hasAC ? "Yes" : "No"}`;
    }
}

// Bike class
class Bike extends Vehicle {
    constructor(
        brand: string,
        model: string,
        pricePerDay: number,
        public gearType: string
    ) {
        super(brand, model, pricePerDay);
    }

    override getRentalInfo(): string {
        return `Bike: ${super.getRentalInfo()}, Gear Type: ${this.gearType}`;
    }
}

// Rental Manager
class RentalManager {
    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }

    listVehicles() {
        console.log("Available Vehicles:");
        this.vehicles.forEach((v, index) => {
            console.log(`${index + 1}. ${v.getRentalInfo()}`);
        });
    }

    bookVehicle(index: number) {
        if (index >= 0 && index < this.vehicles.length) {
            const booked = this.vehicles.splice(index, 1)[0];
            console.log(`Booked: ${booked.getRentalInfo()}`);
        } else {
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
