var darkmode = window.localStorage.getItem("darkmode");
setTimeout(() => {
  applymode();
}, 0.001);
console.log(localStorage);

function applymode() {
  if (darkmode == "true") {
    console.log(localStorage);
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("topnav").style.backgroundColor = "#1e1e1e";
    document.getElementById("mode").style.filter = "invert(1)";
    document.getElementById("Rok").style.color = "white";
    document.getElementById("home").style.filter = "invert(1)";
    document.getElementById("nothing").style.color = "white";
  } else {
    console.log(localStorage);
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("topnav").style.backgroundColor = "white";
    document.getElementById("mode").style.filter = "invert(0)";
    document.getElementById("Rok").style.color = "black";
    document.getElementById("home").style.filter = "invert(0)";
    document.getElementById("nothing").style.color = "black";
  }
}
