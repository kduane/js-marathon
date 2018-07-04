// YOUR CODE GOES HERE
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures');
  console.log(`Welcome abord the ${ourShip.name}`);
  ourShip.loadCrew(trainingClass);
  ourShip.chooseCaptain();
  console.log(`${ourShip.captain.name} is now the captain of the ${ourShip.name}`);
  console.log(rocket);
};

class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew =[];
    this.captain = null;
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

let ourShip = new Spaceship('Milano');
let crewNames = ['Tori', 'Ken', 'StarLord', 'Gamorra', 'Drax', 'Rocket', 'Groot', 'Mantis'];
let trainingClass = trainCrew(crewNames);


launchpad();
