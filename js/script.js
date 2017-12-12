var openFeedbackAndOverlay = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var popupOverlay = document.querySelector(".feedback-overlay");
var closeFeedbackAndOverlay = popup.querySelector(".modal-feedback-btn_close");
var form = popup.querySelector("form");
var nameFeedBack = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var textarea = popup.querySelector("[name=feedback-text]");
var storage = localStorage.getItem("nameFeedBack");

	openFeedbackAndOverlay.addEventListener("click", function(event) {
		event.preventDefault();
    popup.classList.add("modal-content-show");
    nameFeedBack.focus();
    popupOverlay.classList.add("modal-feedback-overlay");
	});

	closeFeedbackAndOverlay.addEventListener("click", function(event) {
		event.preventDefault();
    popup.classList.remove("modal-content-show");
    popupOverlay.classList.remove("modal-feedback-overlay");
    popup.classList.remove("modal-content-show_error");
	});

  form.addEventListener("submit", function (evt) {
    if (!nameFeedBack.value || !email.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-content-show_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-content-show_error");
      }  else {
      localStorage.setItem("nameFeedBack", nameFeedBack.value);
    }
  });

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-content-show_error");
			}
			if (popupOverlay.classList.contains("modal-feedback-overlay")) {
        popupOverlay.classList.remove("modal-feedback-overlay");
			}
		}
	});
  ymaps.ready(init);
  var myMap,
  myPlacemark1;

  function init(){
    myMap = new ymaps.Map ("map", {
        center: [34.86591303, -111.76364148],
        zoom: 15
    });
myPlacemark1 = new ymaps.Placemark([34.86591303, -111.763641484], {
  balloonContentHeader: 'Аризона',
  balloonContentBody: 'г. Седона',
  balloonContentFooter: 'Приезжайте',
  hintContent: 'Здесь самые лучшие места' });

  myMap.geoObjects.add(myPlacemark1);
  }
