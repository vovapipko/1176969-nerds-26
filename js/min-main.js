var d=document,modal=d.querySelector(".modal"),button=d.querySelector(".contacts-block_button"),close=d.querySelector(".modal-close"),backModal=d.querySelector(".modal-backdrop"),modalContent=d.querySelector(".modal-content"),form=d.querySelector(".modal-form"),buttonSubmit=d.querySelector(".modal-form_button_submit"),inputName=d.querySelector(".modal-form .modal-form_name_input"),inputEmail=d.querySelector(".modal-form .modal-form_email_input"),inputText=d.querySelector(".modal-form .modal-form_text_input");function openModal(){button.addEventListener("click",function(){modal.style.display="flex",modalContent.classList.add("bounce-in-down")})}function closeModal(){close.addEventListener("click",function(){modal.style.display="none",modalContent.classList.remove("bounce-in-down")}),backModal.addEventListener("click",function(){modal.style.display="none",modalContent.classList.remove("bounce-in-down")})}function sendForm(){buttonSubmit.addEventListener("click",function(){""==inputName.value?(inputName.classList.add("error-value"),modalContent.classList.add("shake"),setTimeout(removeShake,1e3),inputName.onclick=function(){inputName.classList.remove("error-value")}):""==inputEmail.value?(inputEmail.classList.add("error-value"),setTimeout(removeShake,1e3),modalContent.classList.add("shake"),inputEmail.onclick=function(){inputEmail.classList.remove("error-value")}):""==inputText.value&&(inputText.classList.add("error-value"),setTimeout(removeShake,1e3),modalContent.classList.add("shake"),inputText.onclick=function(){inputText.classList.remove("error-value")})})}function removeShake(){modalContent.classList.remove("shake","bounce-in-down")}function addScript(e){var o=d.createElement("script");o.src=e,o.async=!1,d.body.append(o)}function readyMapAPI(){ymaps.ready(insertMap)}function insertMap(){myMap=new ymaps.Map("contacts-map",{center:[59.938631,30.323055],zoom:16,controls:["zoomControl","typeSelector","rulerControl","fullscreenControl"]}),myPlacemark=new ymaps.Placemark([59.938631,30.323055],{hintContent:"г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"},{iconLayout:"default#image",iconImageHref:"./images/map-marker.png",iconImageSize:[231,190],iconImageOffset:[-50,-190]}),myMap.geoObjects.add(myPlacemark)}openModal(),closeModal(),sendForm(),addScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU"),setTimeout(readyMapAPI,500);