const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let validContact = false;
  let contactNo = -1;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      validContact = true;
      contactNo = [i];
      console.log(`Contact found at index ${i}: ${name}`)
    }
  }
  if (validContact) {
    if (contacts[contactNo].hasOwnProperty(prop)) {
      return contacts[contactNo][prop];
    } else {
      return "No such property";
    }
  } else if (!(validContact)) {
    return "No such contact"
  }

}
