// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


//RECORD COLLECTION

//EXPECTED INPUT(S): object, id, prop, value
//EXPECTED RESULT(S): 
  //if prop != "tracks" && value != "", then prop = value
  //  if prop ==  "tracks" && id !includes "tracks", then object.id["tracks"] = value
  //if prop == "tracks" && value != "", then tracks.push(value)
  //if value == "", then delete obj.id[prop]
//EXPECTED OUTPUT(S): object (orig)
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && !(records[id].hasOwnProperty("tracks"))) {
    records[id]["tracks"] = [value];
  } else if (prop == "tracks" && value != "") {
    records[id]["tracks"].push(value);
  } else if (value == "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));