// Something is wrong with one of these classes. It's not taking in data. Debug the code and figure out what is wrong.

class Car {
  constructor(make) {
    this.make = make
  }

  displayMake() {
    return this.make
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand)
    this.model = model
  }

  stats() {
    return `MAKE: ${this.displayMake()}, MODEL: ${this.model}`
  }
}

const car = new Model("Toyota", "Corolla")
console.log(car.stats())
