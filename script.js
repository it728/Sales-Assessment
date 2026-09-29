


const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby586HV5nUkfiuM5NCknD0kVLpCVbzfXf6d7Hr0FXdxehq3XuZBZMJHs49DxjKERRRS/exec";

// ============================================================
// SALES ASSESSMENT
// ============================================================

const questions = [

  {
    id: 1,
    section: "Basic Objection Handling",
    text: "A customer says, “I’m not interested,” but stays on the line. What’s your BEST move?",
    options: [
      "End the call politely",
      "Ask a probing question to uncover hidden needs",
      "Immediately offer a discount",
      "Continue with full script"
    ]
  },

  {
    id: 2,
    section: "Basic Objection Handling",
    text: "A customer is interested but keeps delaying the decision. What should you do?",
    options: [
      "Accept and end call",
      "Create urgency while reinforcing value",
      "Pressure them strongly",
      "Offer the lowest price immediately"
    ]
  },

  {
    id: 3,
    section: "Basic Objection Handling",
    text: "Customer says, “Send me details, I’ll check later.” What’s the BEST response?",
    options: [
      "Agree and end call",
      "Send info and set a clear follow-up schedule",
      "Ignore request",
      "Offer the lowest price immediately",
      "Push for immediate sale aggressively"
    ]
  },

  {
    id: 4,
    section: "Basic Objection Handling",
    text: "You notice the customer sounds unsure but not objecting directly. What should you do?",
    options: [
      "Continue talking",
      "Ask clarifying questions",
      "End call",
      "Offer discount"
    ]
  },

  {
    id: 5,
    section: "Basic Objection Handling",
    text: "A customer is comparing features with a competitor and seems well-informed. What’s BEST?",
    options: [
      "Overload them with more info",
      "Focus on unique value aligned to their needs",
      "Discredit competitor",
      "Offer discount immediately"
    ]
  },


  // ==========================================================
  // SECTION 2 — ADVANCED OBJECTION HANDLING
  // ==========================================================

  {
    id: 6,
    section: "Advanced Objection Handling",
    text: "Customer says, “It’s too expensive,” but continues engaging. What does this MOST likely mean?",
    options: [
      "They will never buy",
      "They see value but need justification",
      "They want to end call",
      "They are confused"
    ]
  },

  {
    id: 7,
    section: "Advanced Objection Handling",
    text: "Customer says, “I need to ask my partner.” What’s BEST response?",
    options: [
      "End call",
      "Ask what matters most to their partner and address it",
      "Push for immediate decision",
      "Ignore concern"
    ]
  },

  {
    id: 8,
    section: "Advanced Objection Handling",
    text: "Customer had a previous bad experience with your company. What’s BEST approach?",
    options: [
      "Defend the company",
      "Acknowledge, empathize, and rebuild trust",
      "Change topic",
      "Offer discount immediately"
    ]
  },

  {
    id: 9,
    section: "Advanced Objection Handling",
    text: "Customer keeps interrupting due to frustration. What should you do FIRST?",
    options: [
      "Interrupt back",
      "Let them speak and acknowledge emotions",
      "Continue script",
      "Transfer call"
    ]
  },

  {
    id: 10,
    section: "Advanced Objection Handling",
    text: "Customer says, “I’ll call back,” but shows buying signals. What’s BEST?",
    options: [
      "End call",
      "Secure commitment or schedule exact callback",
      "Ignore",
      "Pressure aggressively"
    ]
  },


  // ==========================================================
  // SECTION 3 — COMMUNICATION AND CONTROL
  // ==========================================================

  {
    id: 11,
    section: "Communication and Control",
    text: "A customer talks too much and goes off-topic, but seems comfortable with you. What’s the BEST move?",
    options: [
      "Let them continue to build rapport, even if it takes time",
      "Politely interrupt and redirect with a summary + question",
      "Ignore and wait for them to stop naturally",
      "Cut them off and go back to script"
    ]
  },

  {
    id: 12,
    section: "Communication and Control",
    text: "A quiet customer gives short answers like “yes/no,” but stays on the call. What does this MOST likely indicate?",
    options: [
      "They are not interested",
      "They are busy and want to end call",
      "They may be interested but not yet engaged or comfortable",
      "They already decided to buy"
    ]
  },

  {
    id: 13,
    section: "Communication and Control",
    text: "Customer says “I don’t understand,” after your explanation. What is the BEST response?",
    options: [
      "Repeat the same explanation slower",
      "Simplify using analogy and confirm understanding",
      "Skip details and push closing",
      "Transfer to another agent"
    ]
  },

  {
    id: 14,
    section: "Communication and Control",
    text: "A customer challenges your product knowledge with a detail you’re unsure about. What’s the BEST action?",
    options: [
      "Give a confident guess to maintain authority",
      "Admit uncertainty, verify, and return with accurate info",
      "Avoid the question and redirect",
      "Transfer immediately"
    ]
  },

  {
    id: 15,
    section: "Communication and Control",
    text: "Mid-month, you’re behind quota despite following the script. What’s the BEST strategic move?",
    options: [
      "Increase call volume only",
      "Stick strictly to script for consistency",
      "Analyze patterns and adjust approach based on results",
      "Wait for better leads"
    ]
  },

  {
    id: 16,
    section: "Communication and Control",
    text: "After multiple rejections, your performance drops slightly. What’s the BEST recovery approach?",
    options: [
      "Take a long break to reset",
      "Continue calling without changes",
      "Reflect briefly, adjust tone/approach, then continue",
      "Skip difficult customers"
    ]
  },

  {
    id: 17,
    section: "Communication and Control",
    text: "You’re upselling, but the customer already seems satisfied with the basic option. What’s the BEST move?",
    options: [
      "Push the higher plan aggressively",
      "Respect their choice and skip upsell",
      "Position upgrade based on future value relevant to them",
      "Offer discount on higher plan immediately"
    ]
  },

  {
    id: 18,
    section: "Communication and Control",
    text: "A customer becomes slightly irritated, but still listening. What’s the BEST FIRST move?",
    options: [
      "Immediately apologize and offer discount",
      "Acknowledge concern, lower tone, and clarify issue",
      "Continue explaining benefits",
      "Transfer to supervisor"
    ]
  },

  {
    id: 19,
    section: "Communication and Control",
    text: "A customer asks a question outside your knowledge, but seems ready to buy. What’s the BEST move?",
    options: [
      "Give a quick estimated answer",
      "Delay the answer and push closing",
      "Be transparent, give partial info, and offer quick verification",
      "Transfer immediately"
    ]
  },

  {
    id: 20,
    section: "Communication and Control",
    text: "At closing stage, customer hesitates and says, “I’m not 100% sure.” What does this MOST likely signal and what should you do?",
    options: [
      "They are rejecting → end call",
      "They need a discount → offer immediately",
      "They have a hidden concern → ask a direct closing question",
      "They are confused → restart entire pitch"
    ]
  }

];

function shuffleArray(array) {

  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      shuffled[i],
      shuffled[j]
    ] = [
      shuffled[j],
      shuffled[i]
    ];

  }

  return shuffled;

}


function createShuffledQuestions() {

  const section1 =
    questions.filter(
      question => question.id >= 1 &&
                  question.id <= 5
    );

  const section2 =
    questions.filter(
      question => question.id >= 6 &&
                  question.id <= 10
    );

  const section3 =
    questions.filter(
      question => question.id >= 11 &&
                  question.id <= 20
    );


  return [

    ...shuffleArray(section1),

    ...shuffleArray(section2),

    ...shuffleArray(section3)

  ];

}

const ANSWER_KEY = {

  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,

  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,

  11: 1,
  12: 2,
  13: 1,
  14: 1,
  15: 2,
  16: 2,
  17: 2,
  18: 1,
  19: 2,
  20: 2

};

function calculateScore() {

  let score = 0;

  for (let i = 0; i < shuffledQuestions.length; i++) {

    if (answers[i] === ANSWER_KEY[shuffledQuestions[i].id]) {
      score++;
    }

  }

  return score;
}


// ============================================================
// VARIABLES
// ============================================================

let shuffledQuestions = [];

let currentQuestion = 0;

const answers = [];

const $ = (id) => 
   document.getElementById(id);


// ============================================================
// TIMER
// ============================================================

const TIME_LIMIT = 15 * 60;

let timeRemaining = TIME_LIMIT;

let timerInterval = null;

let assessmentStartTime = null;

let timeExpired = false;

let assessmentStarted = false;

let assessmentSubmitted = false;


window.addEventListener("beforeunload", function (event) {
  if (assessmentStarted && !assessmentSubmitted)

     {
    event.preventDefault();
    event.returnValue = "";
    return "";
  }
});

function shuffleQuestions() {

  shuffledQuestions = [...questions];

  for (
    let i = shuffledQuestions.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      shuffledQuestions[i],
      shuffledQuestions[j]
    ] = [
      shuffledQuestions[j],
      shuffledQuestions[i]
    ];

  }

}

// ============================================================
// SHOW MAIN SECTION
// ============================================================

function show(sectionId) {

  const sections = [
    "loginSection",
    "instructionsSection",
    "questionSection",
    "thankYouSection"
  ];

  sections.forEach((id) => {

    const element = $(id);

    if (element) {

      element.classList.toggle(
        "hidden",
        id !== sectionId
      );

    }

  });

}


// ============================================================
// NOTICE MODAL
// ============================================================

function showNotice(message) {

  const noticeMessage = $("noticeMessage");
  const noticeModal = $("noticeModal");

  if (noticeMessage) {

    noticeMessage.textContent = message;

  }

  if (noticeModal) {

    noticeModal.classList.remove("hidden");

  }

}

// ============================================================
// TIMER FUNCTIONS
// ============================================================
function startTimer() {
  clearInterval(timerInterval);

  const savedStartTime = sessionStorage.getItem("assessmentStartTime");

  if (savedStartTime) {
    assessmentStartTime = Number(savedStartTime);
  } else {
    assessmentStartTime = Date.now();
    sessionStorage.setItem(
      "assessmentStartTime",
      assessmentStartTime
    );
  }

  assessmentStarted = true;
  assessmentSubmitted = false;

  updateTimerFromClock();

  timerInterval = setInterval(() => {
    updateTimerFromClock();
  }, 1000);
}

function updateTimerFromClock() {
  const elapsedSeconds = Math.floor(
    (Date.now() - assessmentStartTime) / 1000
  );

  timeRemaining = Math.max(
    TIME_LIMIT - elapsedSeconds,
    0
  );

  updateTimerDisplay();

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);

    timeExpired = true;

    showNotice(
      "Time is up. Your assessment will now be submitted."
    );

    setTimeout(() => {
      submitAssessment();
    }, 1500);
  }
}


function updateTimerDisplay() {

  const timer =
    $("timer");

  const timerContainer =
    $("timerContainer");

  if (!timer) {
    return;
  }

  const minutes =
    Math.floor(timeRemaining / 60);

  const seconds =
    timeRemaining % 60;

  timer.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


  if (timerContainer) {

    timerContainer.classList.remove(
      "warning",
      "danger"
    );

    if (timeRemaining <= 60) {

      timerContainer.classList.add(
        "danger"
      );

    } else if (timeRemaining <= 300) {

      timerContainer.classList.add(
        "warning"
      );

    }

  }

}

// ============================================================
// GET SECTION NUMBER
// ============================================================

function getSectionNumber(questionIndex) {

  if (questionIndex < 5) {
    return 1;
  }

  if (questionIndex < 10) {
    return 2;
  }

  return 3;
}


// ============================================================
// RENDER QUESTION
// ============================================================

function renderQuestion() {

 const question =
  shuffledQuestions[currentQuestion];

  const questionNumber =
    currentQuestion + 1;

  const totalQuestions =
  shuffledQuestions.length;
  

  // ----------------------------------------------------------
  // Progress
  // ----------------------------------------------------------

  $("progressText").textContent =
    `Question ${questionNumber} of ${totalQuestions}`;


  $("progressFill").style.width =
    `${(questionNumber / totalQuestions) * 100}%`;


  // ----------------------------------------------------------
  // Section
  // ----------------------------------------------------------

  const sectionNumber =
  getSectionNumber(
    currentQuestion
  );

const sectionLabel =
  $("sectionLabel");

if (sectionLabel) {

  sectionLabel.textContent =
    `Section ${sectionNumber}`;

}

$("questionTitle").textContent =
  question.section;


  // ----------------------------------------------------------
  // Question
  // ----------------------------------------------------------

  $("questionText").textContent =
    question.text;


  $("questionError").textContent = "";


  // ----------------------------------------------------------
  // Answers
  // ----------------------------------------------------------

  $("answerOptions").innerHTML =
    question.options
      .map((option, index) => {

        const checked =
          answers[currentQuestion] === index
            ? "checked"
            : "";

        return `
          <label class="answer-option">

            <input
              type="radio"
              name="answer"
              value="${index}"
              ${checked}
            >

            <span>${option}</span>

          </label>
        `;

      })
      .join("");


  // ----------------------------------------------------------
  // Previous Button
  // ----------------------------------------------------------

  $("previousButton").disabled =
    currentQuestion === 0;


  // ----------------------------------------------------------
  // Next / Submit Button
  // ----------------------------------------------------------

  if (
  currentQuestion ===
  shuffledQuestions.length - 1
) {

    $("nextButton").textContent =
      "Submit Assessment";

  } else {

    $("nextButton").textContent =
      "Next";

  }

}


// ============================================================
// START BUTTON
// ============================================================

$("startButton").addEventListener(
  "click",
  () => {

    const name =
      $("nameInput").value.trim();

    const email =
      $("emailInput").value.trim();


    // --------------------------------------------------------
    // Validation
    // --------------------------------------------------------

    if (!name || !email) {

      $("errorMessage").textContent =
        "Please enter your email and full name.";

      return;

    }


    // Basic email validation

    if (!email.includes("@")) {

      $("errorMessage").textContent =
        "Please enter a valid email address.";

      return;

    }


    // Clear error

    $("errorMessage").textContent = "";


    // Welcome message

    $("welcomeMessage").textContent =
      `Hello, ${name}! Please follow the instructions below.`;


    // Show instructions

    show("instructionsSection");

  }
);


// ============================================================
// BEGIN ASSESSMENT
// ============================================================

$("beginButton").addEventListener("click", () => {
 currentQuestion = 0;

answers.length = 0;

shuffleQuestions();

  assessmentStarted = true;
  assessmentSubmitted = false;
  timeExpired = false;

  sessionStorage.removeItem("assessmentStartTime");

  history.pushState(null, "", location.href);

  startTimer();

  show("questionSection");
  renderQuestion();
});


// ============================================================
// PREVIOUS BUTTON
// ============================================================

$("previousButton").addEventListener(
  "click",
  () => {

    if (currentQuestion > 0) {

      currentQuestion--;

      renderQuestion();

    }

  }
);

// ============================================================
// SUBMIT ASSESSMENT
// ============================================================

function submitAssessment() {

    assessmentSubmitted = true;
    assessmentStarted = false;

  clearInterval(timerInterval);

   sessionStorage.removeItem("assessmentStartTime");
   
  const submission = {

    name:
      $("nameInput").value.trim(),

    email:
      $("emailInput").value.trim(),

    answers:
      [...answers],

    submittedAt:
      new Date().toISOString(),

    assessmentStartTime:
      assessmentStartTime
        ? new Date(
            assessmentStartTime
          ).toISOString()
        : null,

    timeExpired:
      timeExpired

  };


  // Calculate elapsed time

  const elapsedSeconds =
    assessmentStartTime
      ? Math.floor(
          (Date.now() - assessmentStartTime) / 1000
        )
      : 0;


  const dataToSend = {

    name:
      submission.name,

    email:
      submission.email,

    answers:
      submission.answers,

    assessmentStartTime:
      submission.assessmentStartTime,

    submittedAt:
      submission.submittedAt,

    elapsedSeconds:
      elapsedSeconds,

    timeExpired:
      submission.timeExpired

  };


  fetch(
    GOOGLE_SCRIPT_URL,
    {

      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type": "text/plain"
      },

      body:
        JSON.stringify(dataToSend)

    }
  )
  .then(() => {

    $("thankYouMessage").textContent =
      `Thank you, ${submission.name}! Your assessment has been completed successfully.`;

    show("thankYouSection");

  })
  .catch((error) => {

    console.error(
      "Submission error:",
      error
    );

    showNotice(
      "There was a problem submitting your assessment. Please try again."
    );

  });

}

// ============================================================
// NEXT / SUBMIT BUTTON
// ============================================================

$("nextButton").addEventListener(
  "click",
  () => {

    // --------------------------------------------------------
    // Get selected answer
    // --------------------------------------------------------

    const selected =
      document.querySelector(
        'input[name="answer"]:checked'
      );


    // --------------------------------------------------------
    // Require an answer
    // --------------------------------------------------------

    if (!selected) {

      $("questionError").textContent =
        "Please select an answer before continuing.";

      return;

    }

    const question =
      shuffledQuestions[currentQuestion];

    // --------------------------------------------------------
    // Save answer
    // --------------------------------------------------------

    answers[currentQuestion] = {

      questionId:
        question.id,

      answer:
        Number(selected.value)

    };


    // --------------------------------------------------------
    // Move to next question
    // --------------------------------------------------------
if (
      currentQuestion <
      shuffledQuestions.length - 1
    ) {

      currentQuestion++;

      renderQuestion();

      return;

    }

     submitAssessment();



const score = calculateScore();

const dataToSend = {

  name: submission.name,

  email: submission.email,

  answers: submission.answers,

  score: score,

  totalQuestions: questions.length

};

fetch(GOOGLE_SCRIPT_URL, {

  method: "POST",

  mode: "no-cors",

  headers: {
    "Content-Type": "text/plain"
  },

  body: JSON.stringify(dataToSend)

})
.then(() => {

  $("thankYouMessage").textContent =
    `Thank you, ${submission.name}! Your assessment has been completed successfully.`;

  show("thankYouSection");

})
.catch((error) => {

  console.error("Submission error:", error);

  showNotice(
    "There was a problem submitting your assessment. Please try again."
  );

});


    // --------------------------------------------------------
    // Save to browser
    // --------------------------------------------------------

    localStorage.setItem(
      "assessmentSubmission",
      JSON.stringify(submission)
    );


    // --------------------------------------------------------
    // COMPLETE
    // --------------------------------------------------------

    $("thankYouMessage").textContent =
      `Thank you, ${submission.name}! Your assessment has been completed successfully.`;


    show("thankYouSection");

  }
);

window.addEventListener("load", () => {
  const savedStartTime =
    sessionStorage.getItem("assessmentStartTime");

  if (savedStartTime) {
    assessmentStartTime = Number(savedStartTime);

    const elapsed =
      Math.floor(
        (Date.now() - assessmentStartTime) / 1000
      );

    if (elapsed < TIME_LIMIT) {
      assessmentStarted = true;
      assessmentSubmitted = false;

      history.pushState(null, "", location.href);

      show("questionSection");
      updateTimerFromClock();
      renderQuestion();

      timerInterval = setInterval(() => {
        updateTimerFromClock();
      }, 1000);
    } else {
      sessionStorage.removeItem("assessmentStartTime");
    }
  }
});


window.addEventListener("popstate", () => {
  if (assessmentStarted && !assessmentSubmitted) {
    history.pushState(null, "", location.href);

    showNotice(
      "You cannot go back while the assessment is in progress."
    );
  }
});
// ============================================================
// CLOSE NOTICE
// ============================================================

$("closeNoticeButton").addEventListener(
  "click",
  () => {

    $("noticeModal").classList.add("hidden");

  }
);
