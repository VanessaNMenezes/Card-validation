import validator from './validator.js';

const nameCardInput = document.querySelector('#cardHolderNamer');
const cardNumberInput = document.querySelector('#cardNumber');
const expirationDateInput = document.querySelector('#expirationDate');
const buttonToValidate = document.querySelector('#validationButton');
const finalValidationMessage = document.querySelector('#validationMessage');

buttonToValidate.addEventListener("click" , validateCardNumber); 

function validateCardNumber() { 

  const identifyFullName = nameCardInput.value;
  const identifyCardNumber = cardNumberInput.value;
  const identifyExpirationDate = expirationDateInput.value; 

  const creditCardNumberisValid = validator.isValid(identifyCardNumber);

  if (creditCardNumberisValid === true) {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, PARABÉNS!!! SEU CARTÃO FOI VALIDADO COM  SUCESSO! &#x2705 <br> ${validator.maskify(identifyCardNumber)} - Data de validade: ${identifyExpirationDate} `
    
  } else {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, <strong> OCORREU UM ERRO </strong> &#x274C <br> POR FAVOR, INSIRA UM NÚMERO DE CARTÃO <strong> VÁLIDO. </strong> `
  }

  if (identifyCardNumber === "") {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, <strong> POR FAVOR, INSIRA O NÚMERO DO SEU CARTÃO! </strong>⚠️`
  }
}