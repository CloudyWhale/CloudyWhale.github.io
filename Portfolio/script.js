var darkmode = window.localStorage.getItem("darkmode");
setTimeout(() => {
  applymode();
}, 0.001);
console.log(localStorage);

function applymode() {
  if (darkmode == "true") {
    console.log(localStorage);
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
  } else {
    console.log(localStorage);
    document.getElementById("body").style.backgroundColor = "white";
  }
}
