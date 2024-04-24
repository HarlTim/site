function orderForm(event) {
  if ((validateProduct() && validateEmail() && validateQuantity()) === true) {
      event.preventDefault();
      const product = document.getElementById("product").value;
      const email = document.getElementById("e-mail").value;
      const quantity = document.getElementById("quantity").value;

      let summaryHtml = `
          <strong>Продукт:</strong> ${product}<br>
          <strong>Почта:</strong> ${email}<br>
          <strong>Количество:</strong> ${quantity}
      `;
  }
}
// Функция для обработки формы заказа
function OrderForm() {
  // Получение значений полей формы
  var product = document.getElementById('product').value;
  var email = document.getElementById('e-mail').value;
  var quantity = document.getElementById('quantity').value;

  // Обновление содержимого блока "order-summary"
  document.getElementById('selected-product').innerText = 'Выбранный продукт: ' + product;
  document.getElementById('selected-email').innerText = 'E-mail: ' + email;
  document.getElementById('selected-quantity').innerText = 'Количество: ' + quantity;

  // Дополнительный код для отправки данных на сервер или других действий

  return false; // Чтобы предотвратить реальную отправку формы
}
function validateProduct() {
  var product = document.getElementById("product").value;
  var regex = /^[0-9]+$/;
  
  if (regex.test(product)) {
  var number = parseInt(product);
  if (number < 10) {
  document.getElementById("product").style.color = "blue";
  document.getElementById("product").nextElementSibling.innerHTML = "Илюха очень расстроится, если диаметр будет слишком маленьким";
  } else if (number > 53) {
  document.getElementById("product").style.color = "red";
  document.getElementById("product").nextElementSibling.innerHTML = "Ты че, хочешь туда земной шар спрятать?";
  } else if (number === 52) {
  document.getElementById("product").style.color = "green";
  document.getElementById("product").nextElementSibling.innerHTML = "О, самое то!";
  } else {
  document.getElementById("product").style.color = "black";
  document.getElementById("product").nextElementSibling.innerHTML = "Заебись!";
  }
  return true;
  } else {
  document.getElementById("product").style.color = "red";
  document.getElementById("product").nextElementSibling.innerHTML = "Ты че, еблан? Цифрами напиши, олень!";
  return false;
  }
  }


function validateEmail() {
  var email = document.getElementById("e-mail").value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regex.test(email)) {
      document.getElementById("e-mail").style.color = "green";
      document.getElementById("e-mail").nextElementSibling.innerHTML = "я очень рад, что твой iq позволил ввести какой-то сранный адрес";
      return true;
  } else {
      document.getElementById("e-mail").style.color = "red";
      document.getElementById("e-mail").nextElementSibling.innerHTML = "Ты кого наебать хочешь? Нормальный адрес вводи, баран!";
      return false;
  }
}

function validateQuantity() {
  var quantity = document.getElementById("quantity").value;
  var regex = /^[1-9][0-9]*$/;
  
  if (regex.test(quantity) && quantity >= 1 && quantity <= 30) {
  document.getElementById("quantity").style.color = "green";
  document.getElementById("quantity").nextElementSibling.innerHTML = "заебись";
  return true;
  } else if (quantity <= 1) {
  document.getElementById("quantity").style.color = "red";
  document.getElementById("quantity").nextElementSibling.innerHTML = "Ты че? 1 дилдак зажал? Отдай Ильюхе!";
  return false;
  } else if (quantity > 30) {
  document.getElementById("quantity").style.color = "red";
  document.getElementById("quantity").nextElementSibling.innerHTML = "С поставками перебои, поэтому не больше 30 на руки (в жопу Илюхе)";
  return false;
  }
}

function validateName(name) {
  if (/[\d]/.test(name)) {
    return false; // имя содержит цифры
  } else {
    return true; // имя не содержит цифры
  }
}
function validatePhoneNumber(phoneNumber) {
  var quantity = document.getElementById("phone").value;
  var regex = /^[1-9][0-9]*$/;
  if (/^\d{3}-\d{3}-\d{2}-\d{2}$/.test(phoneNumber)) {
      document.getElementById("phone").style.color = "green";
      document.getElementById("phone").nextElementSibling.innerHTML = "я очень рад, что твой iq позволил ввести какой-то сранный адрес";
      return true;
  } else {
      document.getElementById("phone").style.color = "red";
      document.getElementById("phone").nextElementSibling.innerHTML = "Ты кого наебать хочешь? Нормальный адрес вводи, баран!";
      return false;
  }
}