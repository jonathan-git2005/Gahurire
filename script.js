// Unified onload handler
window.onload = function () {
  alert("Welcome to GS Gahurire!");
};

// Toggle navbar on menu icon click
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Sign-in form validation
const signinForm = document.getElementById("signin-form");
if (signinForm) {
  signinForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    if (username === "admin" && password === "password123") {
      alert("Sign in successful. Welcome to GS Gahurire!");
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });
}

// Back button function (index redirection)
function goBack() {
  window.location.href = "index.html";
}

// Subscribe form handler
const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
      alert("Thanks for subscribing, " + name + "!");
    } else {
      alert("Please enter your name before subscribing.");
    }
  });
}

// Update score function for Sports page
function updateScore() {
  document.getElementById("score5").textContent = "2";
  document.getElementById("score6").textContent = "2";
  alert("Scores updated: Senior 5 and Senior 6 are now tied!");
}

// Placeholder log for future interactivity
console.log("Sport & Entertainment pages loaded");




const toggle = document.getElementById("shareToggle");
const buttons = document.getElementById("shareButtons");

toggle.addEventListener("click", () => {
  buttons.classList.toggle("hidden");
});

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Check out this page!",
      url: window.location.href,
    })
    .then(() => console.log("Page shared successfully"))
    .catch((error) => console.error("Sharing failed", error));
  } else {
    alert("Web Share API is not supported in your browser.");
  }
}



function incrementScore(team) {
  const scoreInput = document.getElementById(`score-${team}`);
  let currentScore = parseInt(scoreInput.value) || 0;
  scoreInput.value = currentScore + 1;
}

function resetScore() {
  document.getElementById('score-s5').value = 0;
  document.getElementById('score-s6').value = 0;
}



  function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('show');
    }
  }

