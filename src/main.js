let popupWindow = document.getElementById('b-popup');
let popupButton = document.getElementById('back-to-window-button');

let showPopUp = () => {
  popupWindow.style.display = "flex";
}

let hidePopUp = () => {
  popupWindow.style.display = "none";
}

let sendDataToGoogle = () => {
  let nameField = document.getElementById('conection-item-name');
  let phoneField = document.getElementById('conection-item-phone');
  let emailField = document.getElementById('conection-item-email');
  let someShitField = document.getElementById('conection-item-some-shit');

  // 1. Создаём новый объект XMLHttpRequest
  // let xhr = new XMLHttpRequest();
  //
  // // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  // xhr.open('GET', `https://script.google.com/macros/s/AKfycbwhBXp00CQODgjxhxoskMFv8p3VAn04NNKA-YSE99QQ7IPwNZpl/exec?p1=${nameField.value}&p2=${phoneField.value}&p3=${emailField.value}&p4=${someShitField.value}`
  // , false);
  //
  // // 3. Отсылаем запрос
  showPopUp();
  // xhr.send();
  // // 4. Если код ответа сервера не 200, то это ошибка
  // if (xhr.status != 200) {
  //   // обработать ошибку
  //   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  // } else {
  //   // вывести результат
  //   alert( xhr.responseText ); // responseText -- текст ответа.
  // }

}

let sendButton = document.getElementById('send-info-button');
sendButton.addEventListener('click', sendDataToGoogle);
popupButton.addEventListener('click', hidePopUp)
