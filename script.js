function calculateScore() {
  const form = document.getElementById("cefr-test");
  const answers = new FormData(form);
  let score = 0;
  // Scoring based on the answers
  const pointValues = {
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    q5: 1,
    q6: 1,
    q7: 1,
    q8: 1,
    q9: 1,
    q10: 1,
    q11: 1,
    q12: 1,
    q13: 1,
    q14: 1,
    q15: 1
  };

  for (let [question, value] of answers.entries()) {
    if (value == "1") {
      score += pointValues[question];
    }
  }

  const percentage = (score / 15) * 100;
  document.getElementById(
    "result"
  ).textContent = `Your score: ${score}/15 (${percentage.toFixed(2)}%)`;

  // Display the redirect message and redirect after 3 seconds
  let redirectUrl;
  let message;
  if (percentage < 40) {
    redirectUrl = "https://yazeeed-store.com"; // A1 level
    message = "مستواك هو A1 وسيتم تحويلك الى كتاب مناسب لمستواك.";
  } else if (percentage >= 40 && percentage < 60) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // A2 level
    message =
      "Your level is A2. You will be redirected to the A2 level content.";
  } else if (percentage >= 60 && percentage < 70) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // B1 level
    message =
      "Your level is B1. You will be redirected to the B1 level content.";
  } else if (percentage >= 70 && percentage < 85) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // B2 level
    message =
      "Your level is B2. You will be redirected to the B2 level content.";
  } else {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // C1 level
    message =
      "Your level is C1. You will be redirected to the C1 level content.";
  }

  // Display the message
  document.getElementById("redirectMessage").textContent = message;

  // Redirect after 3 seconds
  setTimeout(function () {
    window.location.href = redirectUrl;
  }, 3000);
}