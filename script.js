var darkmode = window.localStorage.getItem('darkmode');
setTimeout(() => {  applymode(); }, 0.001);
console.log(localStorage);

function ToggleDarkMode() {
  if (darkmode == 'false') {
    darkmode = 'true';
    window.localStorage.setItem('darkmode', 'true');
  } else {
    darkmode = 'false';
    window.localStorage.setItem('darkmode', 'false');
  }
  applymode();
}

function applymode(){
  if (darkmode == 'true') {
    console.log(localStorage);
    document.getElementById("title").style.color = "white";
    document.getElementById("mode").style.filter = "invert(1)";
    document.getElementById("topnav").style.backgroundColor = "#1e1e1e";
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("Rok").style.color = "white";
  } else {
    console.log(localStorage);
    document.getElementById("title").style.color = "black";
    document.getElementById("mode").style.filter = "invert(0)";
    document.getElementById("topnav").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("Rok").style.color = "black";
  }
}

function Portfolio(){
  window.location.href="/Portfolio/"
}
