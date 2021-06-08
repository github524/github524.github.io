function hideYourScore() {
  document.getElementById("reloadAll").style.visibility = "hidden";
}


var countDown;
var timeLeft;
function countDownClock() {
  timeLeft = 7;
  var text = document.getElementById("countDownTimer");
  document.getElementById("fireworks").style.display = "none";
  document.getElementById("youGot").innerHTML = "Lets do some maths!";
  countDown = setInterval(function () {
      if(timeLeft == 0) {  
      clearInterval(countDown);
      text.innerHTML = "0";
      document.getElementById("answerButtons").style.visibility = "hidden";
        document.getElementById("cover").style.display = "block";
        document.getElementById("startMiniMaths").style.display = "inline-block";
        

    } else {
      text.innerHTML = timeLeft;
     document.getElementById("startMiniMaths").style.display = "none";
    }
    timeLeft -= 1;
  }, 1000);

}

function loadQuestion() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("ans").style.opacity = "0";
  document.getElementById("reloadAll").style.visibility = "visible";
  document.getElementById("answerButtons").style.visibility = "visible";
  var answerButton = document.getElementById("answerButtons");
  for (var i = answerButton.children.length; i >= 0; i--) {
    answerButton.appendChild(answerButton.children[(Math.random() * i) | 0]);
  }
  var q1 = Math.floor(Math.random() * 5 + 1);
  var q2 = Math.floor(Math.random() * 5 + 1);
  var wrongAns = Math.floor(Math.random() * 2 + 1);
  var wrongAns2 = Math.floor(Math.random() * 4 + 3);
  var operators = [
    {
      sign: "+",
      method: function (a, b) {
        return a + b;
      }
    },
    {
      sign: "-",
      method: function (a, b) {
        return a - b;
      }
    }
  ];

  if (q1 > q2) {
    var selectedOperator = Math.floor(Math.random() * operators.length);
  } else {
    var selectedOperator = 0;
  }
  var calc1 = operators[selectedOperator].sign;
  var answer = operators[selectedOperator].method(q1, q2);

  document.getElementById("ques1").innerHTML = q1;
  document.getElementById("ques2").innerHTML = q2;
  document.getElementById("oper").innerHTML = calc1;
  document.getElementById("ans").innerHTML = answer;
  document.getElementById("correctAns").innerHTML = answer;
  document.getElementById("wrongAnswer").innerHTML = answer + wrongAns;
  document.getElementById("wrongAnswer2").innerHTML = answer + wrongAns2;
}

function reloadMiniMaths() {
  countDownClock();
  loadQuestion();
  yourScore = 0;
  document.getElementById("yourScore").innerHTML = yourScore;
}

var yourScore = 0;
var bestScore = 0;

function correctAnswer() {
  document.getElementById("ans").style.opacity = "1";
  document.getElementById("yourScore").innerHTML = yourScore + 1;
  yourScore++;
  if (yourScore > bestScore) {
    bestScore = yourScore;
    document.getElementById("fireworks").style.display = "block";
    document.getElementById("youGot").innerHTML = "NEW BEST SCORE!!";
  }
  document.getElementById("bestScore").innerHTML = bestScore;
  document.getElementById("answerButtons").style.visibility = "hidden";
  setTimeout(loadQuestion, 1200);
  
}

function wrongAnswer(clicked_id) {
  // document.getElementById(clicked_id).style.background = "white";
  // document.getElementById(clicked_id).style.color = "red";
  document.getElementById(clicked_id).innerHTML = "X";
  if (yourScore > 0) {
    document.getElementById("yourScore").innerHTML = yourScore - 1;
    yourScore--;
  } else {
    yourScore = 0;
    document.getElementById("yourScore").innerHTML = yourScore;
  }
}

function reloadAll() {
  timeLeft = 0;
}