var d = document.getElementsByClassName("on-load");

for(var i = 0; i < d.length; i++) {
  if (d[i]) {
    d[i].className += " loaded";
  }
}