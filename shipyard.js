// YOUR CODE GOES HERE
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures');
  let ourShip = new Spaceship('Milano');
  let crewNames = ['Tori', 'Ken', 'StarLord', 'Gamorra', 'Drax', 'Rocket', 'Groot', 'Mantis'];
  let trainingClass = trainCrew(crewNames);
  console.log(`Welcome abord the ${ourShip.name}`);
  ourShip.loadCrew(trainingClass);
  ourShip.chooseCaptain();
  console.log(`${ourShip.captain.name} is now the captain of the ${ourShip.name}`);
  ourShip.mountPropulsion(rocket);
  rocket.addFuel(5);
  ourShip.takeoff();
};

class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew =[];
    this.captain = null;
    this.propulsion = null;
  }

  loadCrew(crewList) {
    crewList.forEach (person => {
      this.crew.push(person);
      console.log(`${person.name} has boarded the ${this.name}`);
    });
  }

  chooseCaptain() {
    var captainSelection = Math.floor(Math.random() * (this.crew.length));
    this.captain = this.crew[captainSelection];
  }

  mountPropulsion(object) {
    this.propulsion = object;
    console.log(`Propulsion successfully mounted`);
  }

  takeoff() {
    if (this.propulsion.fire() === true) {
      console.log(`:rumblerumblerubmble:  And we're off!`);
    } else {
      console.log(`${this.captain.name}, engines appear to be offline.`);
    }
  }

}

function trainCrew(listOfPeople) {
  var trainedCrew = [];
  listOfPeople.forEach(person => {
    var member = new CrewMember(person);
    member.trained = true;
    trainedCrew.push(member);
  });
  return trainedCrew;
}

// rocket.addFuel(10);
// for (i = 0; i < 12; i++) {
//   rocket.fire();
// }

launchpad();
