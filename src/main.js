let popupWindow = document.getElementById('b-popup');
let popupButton = document.getElementById('back-to-window-button');
let nameField = document.getElementById('conection-item-name');
let phoneField = document.getElementById('conection-item-phone');
let emailField = document.getElementById('conection-item-email');
let someShitField = document.getElementById('conection-item-some-shit');



let showPopUp = () => {
  popupWindow.style.display = "flex";
}

let hidePopUp = () => {
  popupWindow.style.display = "none";
}

let checkName = () => {
  let a =2;
  if (nameField.value == ""){
    nameField.style.borderColor="red"
    return false;
  }
  else {
    nameField.style.borderColor="black"
    return true;
  }
}

let checkEmail = () => {
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let valid = re.test(emailField.value);
  if (!valid) {
    emailField.style.borderColor="red"
  }
  else{
    emailField.style.borderColor="black"
  }
  return valid;
}

let checkPhone = () =>{
   let re = /_/;
  let valid = !re.test(phoneField.value);
  if (!valid) {
    phoneField.style.borderColor="red"
  }
  else{
    phoneField.style.borderColor="black"
  }
  return valid;
}





let validateForm = () =>{
  checkPhone();
  checkEmail();
  checkName();
  let valid = checkPhone() && checkEmail() && checkName();
  return valid;
}

let sendDataToGoogle = (ev) => {
  ev.preventDefault();
  if (validateForm()){
    // 1. Создаём новый объект XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', `https://script.google.com/macros/s/AKfycbxXjJs5rgmDNsvUrhl2y2wC3e0KKNwsi94_Yt2ztWoS4LffnnU/exec?p1=${nameField.value}&p2=${phoneField.value}&p3=${emailField.value}&p4=${someShitField.value}`
    , false);

    // 3. Отсылаем запрос

    showPopUp();
    xhr.send();
    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
  //    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат

    }
  }
}

let openHiddenMenu = () =>{
    $("#hidden-menu-container").fadeToggle(200);
    $("#hidden-menu-sub-container").animate({
      left:"+=340px"
    }, 400)
}

let closeHiddenMenu = () =>{
  $("#hidden-menu-container").fadeToggle(200);
  $("#hidden-menu-sub-container").animate({
      left:"-=340px"
    }, 400)
}

let closeHiddenMenuMain = () =>{
  let target = $( event.target );
	 if ( target.is( "#hidden-menu-container" ))
   closeHiddenMenu()
 }


let sendButton = document.getElementById('send-info-button');

sendButton.addEventListener('click', sendDataToGoogle);
popupButton.addEventListener('click', hidePopUp)
//phoneField.addEventListener('keydown', checkSymbol)

$("#conection-item-phone").mask("+7 (999) 999-99-99");
$("#burger-menu").on("click", openHiddenMenu)
$("#hidden-menu-container").on("click", closeHiddenMenuMain)
$("#hidden-menu-navigation a").on("click", closeHiddenMenu)
$("#cross-img-hidden-menu").on("click", closeHiddenMenu)
