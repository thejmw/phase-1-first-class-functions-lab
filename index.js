// Code your solution in this file!

const drivers = ["Sally", "Bob", "Freddy", "Claudia"]
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2);

function returnFirstTwoDrivers(){
    return firstTwo
}

function returnLastTwoDrivers(){
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function(num2){
        return num1 * num2
    }
}

const fareDoubler = fare => fare * 2
const fareTripler = fare => fare * 3

function selectDifferentDrivers(array, passedFN) {
    return passedFN(array)
}