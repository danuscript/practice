let friendsAvailable = true

function makePlans(name) {
return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
if (bool == true) {
  return `Plans made with ${name.toUpperCase()} this weekend`
} else if (bool == false) {
  return `Everyone is busy this weekend`
}
}

console.log(makePlans("Mary"));
friendsAvailable = false;
console.log(makePlans("James"));