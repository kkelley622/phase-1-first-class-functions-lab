// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(0,2);
    
}

// return last two drivers

const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(- 2);
}

// "selecting drivers" array with previous functions as elements

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// fare multiplier that returns a function that multiplies an integer by 4

const createFareMultiplier = (integer) => {
    return function (multiplyValue) {
        return integer * multiplyValue
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// return the first two driver when returnFirstTwoDrivers() is passed as the second argument

// return the last two drivers when passd returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(arrayOfDrivers, returnedDrivers) {
    return returnedDrivers(arrayOfDrivers)
}


