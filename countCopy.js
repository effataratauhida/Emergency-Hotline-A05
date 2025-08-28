let copyCount = 0;
const btnCopyNumber = document.getElementById("btn-copy-number"); // green button counter
const btns = document.getElementsByClassName("btn-copy"); // card copy buttons

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    const card = this.parentNode.parentNode; 
    const badge = card.getElementsByClassName("badge-number")[0];
    if (!badge) return;

    const number = badge.innerText;

    
    navigator.clipboard.writeText(number).then(function() {
      
      copyCount++;
      btnCopyNumber.innerText = copyCount;
      alert("The number is copied: " + number);
    }).catch(function(err) {
      console.error("Failed to copy: ", err);
    }); 
  };
}


    
