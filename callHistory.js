const buttons = document.querySelectorAll(".btn-call");



buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const card = btn.closest(".card-body"); 

    const title = card.querySelector(".card-title").innerText;
    const number = card.querySelector(".badge-number").innerText;

    alert("Calling " + title + " " + number + "...");

    // aside e history dekhano
    // const serviceName = document.getElementById("service-name");
    // const serviceNumber = document.getElementById("service-number");

    // serviceName.innerText = title;
    // serviceNumber.innerText = number;
    
   ;

           
  });
});
