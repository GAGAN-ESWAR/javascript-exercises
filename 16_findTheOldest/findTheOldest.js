const getAge = function (person) {
    if(!person.yearOfDeath){
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath-person.yearOfBirth;
}

const findTheOldest = function(bio) {
    bio.sort((a,b)=> getAge(b)-getAge(a));
    return bio[0];
};

// Do not edit below this line
module.exports = findTheOldest;
