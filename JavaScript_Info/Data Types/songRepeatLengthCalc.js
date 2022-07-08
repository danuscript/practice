let songLength = prompt("How long is the song?")
let repetitions = prompt("How many times did you repeat the song?")

let minutes = (songLength.slice(0, 1));
let seconds = (songLength.slice(2));

let songSeconds = (+minutes * 60) + +seconds;

let totalSeconds = (songSeconds * +repetitions)

let totalMinutes = (+totalSeconds / 60);
let totalHours = (+totalMinutes / 60);

alert(`You listened to the song for a total of ${Math.round(totalMinutes)} minute(s), or ${Math.round(totalHours)} hour(s).`)

console.log(songSeconds)
console.log(totalSeconds)
console.log(totalMinutes)
console.log(totalHours) 