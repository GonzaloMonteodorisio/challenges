// 2 - Create a function that takes an array of counter objects (see example) as its lone argument and returns the sum of all of the counters' `count` properties.

const sumCounters = (countersArray) => countersArray.reduce((accumulator, actualObject) => accumulator + actualObject.count, 0);


