console.log("hi");
function countWords() {
  var goal = document.getElementById("goal").value;
  // Get the input text value
  var text = document.getElementById("textArea").value.split(" ");
  var numWords = 0;
  for (var i = 0; i < text.length; i++) if (text[i].length > 0) numWords++;
  // Display it as output
  document.getElementById("counter").innerHTML = numWords;
  console.log((numWords % goal) / goal);
  document.getElementById("Bar").style.width =
    ((numWords % goal) / goal) * 100 + "%";
  if (numWords % goal == 0 && numWords != 0)
    document.getElementById("Bar").style.width = "100%";
}

var interval = null;
function startTimer(duration) {
  clearInterval(interval);
  interval = null;
  var timer = duration;
  var minutes, seconds;
  document.getElementById("pauseButton").innerHTML = "Pause";
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function stopTimer() {
  if (interval != null) {
    clearInterval(interval);
    interval = null;
    document.getElementById("pauseButton").innerHTML = "Resume";
  } else {
    var currentTime = document.getElementById("timer").innerHTML.split(":");
    console.log(currentTime, currentTime[0] * 60 + currentTime[1]);
    startTimer(+(currentTime[0] * 60) + +currentTime[1]);
  }
}

let countCheck = true;
document.getElementById("countwords").onclick = function () {
  countCheck = !countCheck;
  this.innerHTML = countCheck ? "Hide WC" : "Show WC";
  document.getElementById("ProgressBar").style.display = countCheck
    ? "block"
    : "none";
};
