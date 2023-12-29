function showPage(page) {
  document.querySelectorAll("div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(page).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      // Check if the clicked element is a button
      showPage(event.target.dataset.page);
    }
  });
});
