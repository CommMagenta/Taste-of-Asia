
var modal = document.getElementById("myModal");

var btn = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];
var com = document.getElementsByName('submission')[0];
btn.onclick = function() {
  modal.style.display = "block";
  com.reset();
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
