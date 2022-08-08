// expected input: array, startNum, destNum
// expected output: number

// distance = [1,2,3,4], start = 0, destination = 1, n = 4

// i = 0, (i + 1) % 4

// approach: iteration
// iterate through the input array
//   calculate total distance that is incurred, [clock]
// iterate backwards through array
//   calculate total distance that is incurred, [counterClock]
// return larger of the two variables
// get number of stops from last value in array


// declare a new function distanceBetweenBusStops
var distanceBetweenBusStops = function(distance, start, destination) {
    
    // initialize my distance variables
    let clock = 0;
    let counterClock = 0;
    let stop = start;

// break loop once we reach destination
while (stop !== destination) {
    
    // check the element at the current stop
    // if the element is the final value, loop back around
    if (stop === distance.length - 1) {
        clock += distance[stop]
        stop = 0;
        console.log(`Moving to stop ${stop}. Cost: ${distance[distance.length - 1]}.`)
    } else {
        // add current value to clock variable
        clock += distance[stop]
        stop++; 
        console.log(`Moving to stop ${stop}. Cost: ${distance[stop]}.`)
    }
}
    console.log(`Stopped at stop ${stop}. Total cost: ${clock}.`)

// reset stop variable;
   stop = start;

console.log(`Testing counter-clockwise from ${stop}...`)
 
// break loop once we reach destination
while (stop !== destination ) {
    
    
    // check the element at the current stop
    // if the element is the first value, loop back around to end
    if (stop === 0) {
        counterClock += distance[distance.length - 1];
        stop = distance.length - 1;
        console.log(`Moving to stop ${stop}. Value: ${distance[stop]}.`)
    } else {
        // add current value to clock variable
        stop--; 
        counterClock += distance[stop];
        console.log(`Moving to stop ${stop}.`)
    }
}
    console.log(`Stopped at stop ${stop}.`)
console.log(`clockwise distance: ${clock}. counterclockwise: ${counterClock}`)

if (counterClock > clock) return clock;
return counterClock;
    
};
