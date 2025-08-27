var copyCount = 0;
var btnCopyNumber = document.getElementById("btn-copy-number"); // green button counter
var btns = document.getElementsByClassName("btn-copy"); // card copy buttons

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
   
    var card = this.parentNode.parentNode; 
    var badge = card.getElementsByClassName("badge-number")[0];
    if (!badge) return;

    var number = badge.innerText;

   
    var tempInput = document.createElement("input");
    tempInput.value = number;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    copyCount++;
    btnCopyNumber.innerText = copyCount;

    // alert("Copied: " + number); 
  }
}
