let bucsScore = 0
// Bucs

let bs1 = document.getElementById("bucs-1")

let bs2 = document.getElementById("bucs-2")

let bs3 = document.getElementById("bucs-2")

let bucsTotal = document.getElementById("buccaneers-total")

// Panthers

let panthersScore = 0

let ps1 = document.getElementById("pan-1")

let ps2 = document.getElementById("pan-2")

let ps3 = document.getElementById("pan-2")

let panthTotal = document.getElementById("panthers-total")

// Reset

let newGame = document.getElementById("restart")

// Restart Functions/

function reset() {
  bucsScore = 0
  panthersScore = 0
  bucsTotal.textContent = bucsScore
  panthTotal.textContent = panthersScore
}

// Bucs Add Functions

function bucsOne() {
  bucsScore += 1
  bucsTotal.textContent = bucsScore
}

function bucsTwo() {
  bucsScore += 2
  bucsTotal.textContent = bucsScore
}

function bucsThree() {
  bucsScore += 3
  bucsTotal.textContent = bucsScore
}

// Panthers Add Functions

function panthsOne() {
  panthersScore += 1
  panthTotal.textContent = panthersScore
}

function panthsTwo() {
  panthersScore += 2
  panthTotal.textContent = panthersScore
}

function panthsThree() {
  panthersScore += 3
  panthTotal.textContent = panthersScore
}

/*
// Timer

let interval;

function countDown() {
  // Clear the existing interval if any
  if (interval) {
    clearInterval(interval);
  }

  // Reset the countdown time to 15 minutes (in milliseconds)
  let countdownTime = 15 * 60 * 1000;

  // Update the countdown every second
  interval = setInterval(function () {
    countdownTime -= 1000; // Decrease the countdown time by 1 second

    // Calculate minutes and seconds
    const minutes = Math.floor(countdownTime / (1000 * 60));
    const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message and clear the interval
    if (countdownTime <= 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "Time's Up!";
    }
  }, 1000);
}
*/
