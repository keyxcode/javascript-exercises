const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let currentAge = getAge(currentPerson);
        let oldestAge = getAge(oldestPerson);
        return (oldestAge > currentAge) ? oldestPerson : currentPerson;
    })
};

function getAge(person) {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if (!death) death = new Date().getFullYear();

    return death - birth; 
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
