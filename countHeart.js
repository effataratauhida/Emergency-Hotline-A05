let heartCount = 0;
const btnHeartNumber = document.getElementById("btn-heart-number"); // header heart button
const hIcons = document.getElementsByClassName("heart-icon"); // card heart buttons

for (let i = 0; i < hIcons.length; i++) {
  hIcons[i].onclick = function() {
    heartCount++;
    btnHeartNumber.innerText = heartCount;
    }
}