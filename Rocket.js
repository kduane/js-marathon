let rocket = {
  fuel: 0,
  addFuel(amount) {
    this.fuel += amount;
    console.log(fuel);
    return fuel;
  },
  fire() {
    if (fuel > 1) {
      fuel -= 1;
      console.log(`Engines are fired up!`);
      console.log(fuel);
      return true;
    } else {
      console.log(`Rocket Failed to Fire`);
      return false;
    }
  }

};


module.exports = rocket;
