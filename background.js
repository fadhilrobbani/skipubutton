chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const btn = document.querySelector("#next_step");
      if (btn) {
        btn.classList.remove("disabled");
        btn.removeAttribute("disabled");
        console.log("✅ Button enabled!");
      } else {
        console.log("❌ Button not found.");
      }
    },
  });
});
