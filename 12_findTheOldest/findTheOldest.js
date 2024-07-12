const findTheOldest = function (people) {
  let oldestPerson = {};
  let oldestPersonAge = 0;
  let currentAge = 0;
  for (const person of people) {
    if (person.yearOfDeath === undefined) {
      const currentYear = new Date().getFullYear();
      currentAge = currentYear - person.yearOfBirth;
    } else {
      currentAge = person.yearOfDeath - person.yearOfBirth;
    }
    if (currentAge > oldestPersonAge) {
      oldestPersonAge = currentAge;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
