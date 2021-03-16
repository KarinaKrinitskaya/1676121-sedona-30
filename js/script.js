const link = document.querySelector(".search-button");
const popup = document.querySelector(".search-form");
const arrival = popup.querySelector("[name=arrival]");
const departure = popup.querySelector("[name=departure]");

let isStorageSupport = true;
let storageArrival = "";
let storageDeparture = "";

try {
  storageArrival = localStorage.getItem("arrival");
  storageDeparture = localStorage.getItem("departure");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (popup.classList.contains("modal-show")
    && storageArrival && storageDeparture) {
    arrival.value = storageArrival;
    departure.value = storageDeparture;
  arrival.focus();
}
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
  if (isStorageSupport) {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("departure", departure.value);
    }
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


