var darkmode = false;
function CAVEMAN() {
  window, (location.href = "Rok/");
}

function ToggleDarkMode() {
  if (darkmode == false) {
    darkmode = true;
  } else {
    darkmode = false;
  }
  if (darkmode == true) {
    document.getElementById("title").style.color = "white";
    document.getElementById("mode").style.filter = "invert(1)";
    document.getElementById("topnav").style.backgroundColor = "#1e1e1e";
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("Rok").style.color = "#353535";
  } else {
    document.getElementById("title").style.color = "black";
    document.getElementById("mode").style.filter = "invert(0)";
    document.getElementById("topnav").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("Rok").style.color = "#dddddd";
  }
}
