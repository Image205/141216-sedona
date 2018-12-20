var modal_button = document.querySelector(".form_label_button");
var hotel_form = document.querySelector(".hotel_find");
var arrive = document.querySelector("[name=arrive]");
var departure = document.querySelector("[name=departure]");
var adult = document.querySelector("[name=adult");

hotel_form.classList.remove("form_no_JS");

modal_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  hotel_form.classList.toggle("form_no_JS");
  arrive.focus();
  arrive.classList.remove("error");
  departure.classList.remove("error");
  adult.classList.remove("error");
});

hotel_form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!arrive.value || !departure.value || !adult.value) {
      arrive.classList.remove("error");
      departure.classList.remove("error");
      adult.classList.remove("error");
      hotel_form.offsetWidth = hotel_form.offsetWidth;
      arrive.classList.add("error");
      departure.classList.add("error");
      adult.classList.add("error");
 

  };
});