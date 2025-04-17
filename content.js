document.addEventListener("DOMContentLoaded", function () {
  const nextStepButton = document.querySelector("#next_step");
  if (nextStepButton) {
    nextStepButton.classList.remove("disabled");
    nextStepButton.removeAttribute("disabled");
    console.log("✅ Button enabled!");
  } else {
    console.log("❌ Button not found.");
  }
});
