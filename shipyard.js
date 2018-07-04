// YOUR CODE GOES HERE
let CrewMember = require('./CrewMember');

let launchpad = (ship) => {
  console.log('Initiating preflight procedures');
  console.log(`Welcome abord the ${ourShip.name}`);
  console.log(ourShip.crew);
};


class Spaceship {
  constructor(name) {
    this.name = name;
    this.crew =[];
  }

  trainCrew(listOfPeople) {
    listOfPeople.forEach(person => {
      var member = new CrewMember(person);
      member.trained = true;
      this.crew.push(member);
    });
  }

}

let ourShip = new Spaceship('Milano');
let crewNames = ['Tori', 'Ken', 'Katja', 'Dario', 'Claire', 'Jess'];
ourShip.trainCrew(crewNames);

launchpad();
