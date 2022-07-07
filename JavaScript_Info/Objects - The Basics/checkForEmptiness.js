function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

delete schedule["8:30"];

console.log(isEmpty(schedule));

schedule.day = "WED";

console.log(isEmpty(schedule));

delete schedule.day;

console.log(isEmpty(schedule));
