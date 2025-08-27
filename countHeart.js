var heartCount = 0;
var btnHeartNumber = document.getElementById("btn-heart-number"); // header heart button
var hIcons = document.getElementsByClassName("heart-icon"); // card heart buttons

for (var i = 0; i < hIcons.length; i++) {
  hIcons[i].onclick = function() {
    copyCount++;
    btnHeartNumber.innerText = copyCount;
    }
}