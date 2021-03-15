const link = document.querySelector(".search-button");
const popup = document.querySelector(".search-form");
const arrival = popup.querySelector("[name=arrival]");
const departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("display-none");
  popup.classList.add("modal-show");
  arrival.focus();
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();}
else {
    localStorage.setItem("arrival", larrival.value);
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});


