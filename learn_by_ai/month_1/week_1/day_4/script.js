//task 1
let num = -1;
if (num >= 1) {
  console.log("Positive");
} else if (num == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}
//task 2
let day = "friday";
//saturday sunday monday tuesday
// wednesday thursday friday
switch (day) {
  case "saturday":
    console.log("this is saturday");
    break;
  case "sunday":
    console.log("this is sunday");
    break;
  case "monday":
    console.log("this is monday");
    break;
  case "thursday":
    console.log("this is thursday");
    break;
  case "wednesday":
    console.log("this is wednesday");
    break;
  case "tuesday":
    console.log("this is tuesday");
    break;

  default:
    console.log("this is friday");
    break;
}
