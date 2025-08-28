const buttons = document.querySelectorAll(".btn-call");
const historyList = document.getElementById("service-history");
const clearBtn = document.getElementById("btn-clear");


let points = 100;
const showPoints = document.getElementById("user-points");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {

    if (points < 20) {
      alert("⚠️ No coins left! (20 needed)");
      return;
    }
    
    const card = btn.closest(".card-body"); 
    const title = card.querySelector(".card-title").innerText;
    const number = card.querySelector(".badge-number").innerText;
    
    // 1st alert message
    alert("📞 Calling " + title + " " + number + "...");

    // coin reduce
    points -= 20;
    if (points < 0) points = 0; // safeguard
    showPoints.innerText = points;

    //  time set
    function setTime() {
      const d = new Date();
      const time = d.toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
      return time;
    }
  // adding title,number to new elements

  function addHistoryList (title, number) {
    const elm = document.createElement('div');
    elm.className = 'bg-[#f2f2f2] rounded-xl p-1 flex flex-row  justify-between shadow-lg mt-5 p-2';
    elm.innerHTML = 
    `<div class="flex flex-col">
        <span class="font-medium text-sm">${title}</span>
        <span class=" text-gray-500 px-2 py-1 rounded-lg text-base font-medium">
            ${number}</span>
    </div>
    <div class="text-sm">${setTime()}</div>`;

    historyList.append(elm);
  }
  addHistoryList(title, number);
  
  // history clear
  clearBtn.addEventListener('click', function() {
    historyList.innerHTML = '';

  })

   

           
  });
});
