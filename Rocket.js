let rocket = {
  fuel: 0,
  addFuel(amount) {
    this.fuel += amount;
    console.log(`${this.fuel} Fuel available`);
    return this.fuel;
  },
  fire() {
    if (this.fuel > 1) {
      this.fuel -= 1;
      console.log(`Engines are fired up!`);
      console.log(`${this.fuel} Fuel available`);
      return true;
    } else {
      console.log(`Rocket Failed to Fire`);
      return false;
    }
  }

};


module.exports = rocket;
