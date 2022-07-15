function testSize(num) {
  if (num >= 20) {
    return "Huge";
  } else if (num < 20 && num >= 15) {
    return "Large";
  } else if (num < 15 && num >= 10) {
    return "Medium";
  } else if (num < 10 && num >= 5) {
    return "Small";
  } else {
    return "Tiny";
  }
}

testSize(7);