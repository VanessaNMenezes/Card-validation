import validator from './validator.js';

const nameCardInput = document.querySelector('#cardHolderNamer');
const cardNumberInput = document.querySelector('#cardNumber');
const expirationDateInput = document.querySelector('#expirationDate');
const validationButton = document.querySelector('.validation-Button');
const finalValidationMessage = document.querySelector('#validationMessage');

validationButton.addEventListener("click" , validateCardNumber); // vai configurar uma FUNÇÃO (validateCardNumber) que será chamada sempre que o BOTÃO DE VALIDAÇÃO for clicado.

function validateCardNumber() { // Função é uma ação executada assim que é chamada OU decorrência de algum evento. Pode receber paramêtros e retornar um resultado.

  const identifyFullName = nameCardInput.value;
  const identifyCardNumber = cardNumberInput.value;
  const identifyExpirationDate = expirationDateInput.value; //value, serve para obter o valor do campo.

  const creditCardNumberisValid = validator.isValid(identifyCardNumber); // para validar um usuário, essa função de validação é usada. A validação é um método para autenticar o usuário (aqui estou validando o número do cartão de crédito).

  if (creditCardNumberisValid === true) {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, PARABÉNS!!! SEU CARTÃO FOI VALIDADO COM  SUCESSO! &#x2705 <br> ${validator.maskify(identifyCardNumber)} - Data de validade: ${identifyExpirationDate} `
  } 
  else {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, <strong> OCORREU UM ERRO </strong> &#x274C <br> POR FAVOR, INSIRA UM NÚMERO DE CARTÃO <strong> VÁLIDO. </strong> `
  }
  if (identifyCardNumber === "") {
    finalValidationMessage.innerHTML = ` Prezado(a) ${identifyFullName}, <strong> POR FAVOR, INSIRA O NÚMERO DO SEU CARTÃO! </strong>⚠️`
  }
}