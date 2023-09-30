const findTheOldest = function(array) {
    return array.reduce((oldest, nowPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const nowAge = getAge(
          nowPerson.yearOfBirth,
          nowPerson.yearOfDeath
        );
        return oldestAge < nowAge ? nowPerson : oldest;
      });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    } return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
