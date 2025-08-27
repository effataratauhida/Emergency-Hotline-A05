let copyCount = 0; // global counter

const btnCopyNumber = document.getElementById("btn-copy-number"); // green button counter
const btnCopyList = document.querySelectorAll(".btn-copy"); // সব copy buttons

btnCopyList.forEach((btn) => {
  btn.addEventListener("click", function () {
    const badge = document.getElementById("badge-number"); // copy করার number
    if (!badge) return;

    const number = badge.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(number)
      .then(() => {
        copyCount++; // counter 1 বাড়াও
        if (btnCopyNumber) btnCopyNumber.textContent = copyCount;
      })
      .catch(err => console.error("Copy failed", err));
  });
});
