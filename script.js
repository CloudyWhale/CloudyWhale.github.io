var darkmode = window.localStorage.getItem("darkmode");
setTimeout(() => {
  applymode();
}, 0.001);
console.log(localStorage);
console.log(window.screen.availWidth);

function ToggleDarkMode() {
  if (darkmode == "false") {
    darkmode = "true";
    window.localStorage.setItem("darkmode", "true");
  } else {
    darkmode = "false";
    window.localStorage.setItem("darkmode", "false");
  }
  applymode();
}

function applymode() {
  if (window.screen.availWidth == 1920) {
    document.getElementById("header").style.width = "30%";
  } else if (window.screen.availWidth == 1280) {
    document.getElementById("header").style.width = "45%";
  }
  if (darkmode == "true") {
    console.log(localStorage);
    document.getElementById("title").style.color = "white";
    document.getElementById("mode").style.filter = "invert(1)";
    document.getElementById("topnav").style.backgroundColor = "#1e1e1e";
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("Rok").style.color = "white";
    document.getElementById("home").style.filter = "invert(1)";
  } else {
    console.log(localStorage);
    document.getElementById("title").style.color = "black";
    document.getElementById("mode").style.filter = "invert(0)";
    document.getElementById("topnav").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("Rok").style.color = "black";
    document.getElementById("home").style.filter = "invert(0)";
  }
}

function Portfolio() {
  window.location.href = "/Portfolio/";
}
