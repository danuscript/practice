let username = prompt("Who's there?")

if (username === null || username === "") {
  alert("Canceled");
} else if (username != "Admin") {
  alert("I don't know you")
} else if (username === "Admin") {
  let password = prompt("Password?")
  if (password === "" || password === null) {
    alert("Canceled");
  } else if (password != "TheMaster") {
    alert("Wrong password")
  } else if (password === "TheMaster") {
    alert("Welcome!")
  }
}
