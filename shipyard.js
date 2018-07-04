// YOUR CODE GOES HERE
require('./CrewMember');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures');
  ourShip = new Spaceship('Milano');
  console.log(`Welcome abord the ${ourShip.name}`);
};

class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew =[];
  }

  addCrewMember() {

  }
}

let crewNames = ['Tori', 'Ken', 'Katja', 'Dario', 'Claire', 'Jess'];

crewNames.forEach(person => {

});

launchpad();
