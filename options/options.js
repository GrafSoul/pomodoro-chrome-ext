const timeOption = document.getElementById("time-option");
const saveBtn = document.getElementById("save-btn");

timeOption.addEventListener("change", (event) => {
  const value = event.target.value;
  if (value < 1 || value > 80) {
    timeOption.value = 25;
  }
});

saveBtn.addEventListener("click", (event) => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
    timeOption: timeOption.value,
  });
});

chrome.storage.local.get(["timeOption"], (res) => {
  timeOption.value = res.timeOption;
});
