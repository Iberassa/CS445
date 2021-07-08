interface ICar {
    name: string;
    acceleration: number;
    honk(): void;
    accelerate(speed: number): void;
}
class Car implements ICar {
    name: string;
    acceleration: number;
    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk(): void {
        console.log(`${this.name} is saying: Toooooooooot!`);
    };
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60)
console.log(car.acceleration);