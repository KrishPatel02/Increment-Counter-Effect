// Declaration

let countersec = document.querySelector(".countersec");

let counternosec = document.querySelector(".counternosec");

let registersec = document.querySelector(".registersec");

let count = 0;

// Increment Counter Effect Funciton

setInterval(() => {
  if (count < 1000) {
    count += 4;

    counternosec.innerText = count;
  }

  if (count >= 1000) {
    counternosec.innerText = count + "+";

    registersec.innerText = "Register in Course";
  }
}, 1);
