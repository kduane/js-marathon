// YOUR CODE GOES HERE
require('./CrewMember');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures');
  console.log(`Welcome abord the ${ourShip.name}`);
};


class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew =[];
  }

  addCrewMember(crewMember) {
    this.crew.push(crewMember);
  }
}

let ourShip = new Spaceship('Milano');

let crewNames = ['Tori', 'Ken', 'Katja', 'Dario', 'Claire', 'Jess'];

crewNames.forEach(person => {
  ourShip.addCrewMember(person);
});

launchpad();
