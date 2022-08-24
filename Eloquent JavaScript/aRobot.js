const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
]

// declare a function that accepts an array of strings in a "start-end" format
function buildGraph(edges) {
  // initialize an output object
  const graph = {};
  // declare a helper function that accepts two strings
  function addEdge(from, to) {
    // if output object doesn't contain property named "string1"
    if (graph[from] == null) {
      // create the property and assign it a value of an array with string2
      graph[from] = [to]
    // otehrewise, if object already has property "string1"
    } else {
      // push string2 into property [string1]'s value array
      graph[from].push(to)
    }
  }
  // split input strings into arrays containing "start" and "end"
  // iterate through this array of arrays
  for (let [from, to] of edges.map(r => r.split("-"))) {
    // invoke helper function passing in start and end
    addEdge(from, to);
    // capture the inverse information as well, since roads lead both ways
    addEdge(to, from)
  }
  // return output object
  return graph;
}

// create new graph object from roads
const roadGraph = buildGraph(roads);
// console.log(roadGraph)

// declare a new class to create village state objects
class VillageState {
  // construct a new object, passing in "place" and "parcels" properties
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  // MOVE TO A NEW LOCATION, UPDATING PARCEL'S ACCORDINGLY
  // add a "move" method that accepts a parameter "destination"
  move(destination) {
    // DON'T MOVE:
    // if there's no direct path from our place to the destination 
    if (!roadGraph[this.place].includes(destination)) {
      // return this village state object
      return this;
    // MOVE:
    // else, if there is a direct path:
    } else {
      // PICK UP/DELIVER THE PARCELS:
      // generate an new array, in which:
      let parcels = this.parcels.map(p => {
        // IF THE PARCEL ISN'T AT OUR PLACE, IGNORE IT
        // if the current parcel's place is not our current place 
          // the parcel remains unchanged
        if (p.place != this.place) return p;
        // IF THE PARCEL IS AT OUR PLACE, PICK IT UP AND MOVE IT
        // else, replace the parcel's information:
          // the object element's place is move's passed-in destination
          // the object element's address remains the same
        return {place: destination, address: p.address};
      // IF THE MOVE WAS TO THE PARCEL'S DESTINATION, REMOVE IT FROM LIST:
      // from this new array, only keep object elements in which:
        // the object element's place is not equal to its address
      }).filter(p => p.place != p.address);
      // return a new village state object
        // with the new parcels, and passed in destination as the new place
      return new VillageState(destination, parcels)
    }
  }
}

// add a method to village state class that accepts a number of parcels
VillageState.random = function(parcelCount = 5){
  // initialize parcels array;
  let parcels = [];
  // generate input number of parcels:
  for (let i = 0; i < parcelCount; i++) {
    // pick an address randomly
    let address = randomPick(Object.keys(roadGraph));
    // pick a starting location randomly
    let place;
    // if the starting location is the destination
    do {
      // pick a different starting location
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    // push object containing the location and target into parcels array
    parcels.push({place, address})
  }
  // return a state starting at the post office, with the random parcels
  return new VillageState("Post Office", parcels)
}

// create new village state object
  // destination: post office
  // parcels:
    // location: "post office"
    // target: "alice's house"
let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);

// invoke the move method to move to alice's house, creating new state
let next = first.move("Alice's House");

// where are we right now?
// console.log(next.place)
// → Alice's House

// what parcels are we holding?
// console.log(next.parcels);
// → []

// did the first state change? no
// console.log(first.place);
// → Post Office

// create a function that accepts an state object, a function, and memory
function runRobot(state, robot, memory) {
  // repeat the following operation while there are parcels
  for (let turn = 0;; turn++) {
    // if there are no more parcels left, 
    if (state.parcels.length == 0) {
      // end loop
      console.log(`Done in ${turn} turns`);
      break;
    }
    // else, if there are still parcels
    // store the result of passing the current state to the robot
    let action = robot(state, memory);
    // invoke move to  move to the robot's direction
    state = state.move(action.direction);
    // update the memory
    memory = action.memory;
    // note that we've moved to the robot's direction
    console.log(`Moved to ${action.direction}`)
  }
}

// GET RANDOM ELEMENT FROM ARRAY
// accept an array as input
function randomPick(array) {
  // generate a random number within the range of array's indices
  let choice = Math.floor(Math.random() * array.length);
  // return the array at the random index
  return array[choice]
}

// here is a robot that randomly travels to destinations
function randomRobot(state) {
  // return a direction that is a random place from destinations array
  return {direction: randomPick(roadGraph[state.place])}
}

// run a simulation, starting with a random parcel list and randomBot
// runRobot(VillageState.random(), randomRobot)

// create a mail route that hits all destinations in the village
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

// here is a robot that follows a route
function routeRobot(state, memory) {
  // if the memory has run out, repopulate it with mail route
  if (memory.length == 0) {
    memory = mailRoute;
  }
  // move to current memory destination, and remove it from memory
  return {direction: memory[0], memory: memory.slice(1)};
}

// run a simulation, starting with a random parcel list and routeBot
runRobot(VillageState.random(), routeRobot, [])
