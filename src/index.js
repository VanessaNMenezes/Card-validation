import validator from './validator.js';

const nameCardInput = document.querySelector('#cardHolderNamer');
const cardNumberInput = document.querySelector('#cardNumber');
const expirationDateInput = document.querySelector('#expirationDate');
const validationButton = document.querySelector('.validation-Button');
const spanClose = document.querySelector('#close');

validationButton.addEventListener("click" , validateCardNumber); // vai configurar uma FUNÇÃO (validateCardNumber) que será chamada sempre que o BOTÃO DE VALIDAÇÃO for clicado.

function validateCardNumber() { // Função é uma ação executada assim que é chamada OU decorrência de algum evento. Pode receber paramêtros e retornar um resultado.

  const modalContentElement = document.getElementById('modal-content');
  const modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal'); // Criando as variáveis do Pop-Up.

  const identifyFullName = nameCardInput.value;
  const identifyCardNumber = cardNumberInput.value;
  const identifyExpirationDate = expirationDateInput.value; //value, serve para obter o valor do campo.

  const creditCardNumberisValid = validator.isValid(identifyCardNumber); // para validar um usuário, essa função de validação é usada. A validação é um método para autenticar o usuário (aqui estou validando o número do cartão de crédito).

  if (creditCardNumberisValid === true) {
    modalContentElement.innerHTML = ` Prezado(a), ${identifyFullName}, PARABÉNS!!! SEU CARTÃO FOI VALIDADO COM  SUCESSO! &#x2705 <b  ${validator.maskify(identifyCardNumber)} Data de validade: ${identifyExpirationDate} <br> A bandeira do seu cartão é `

  } else {
    modalContentElement.innerHTML = ` Prezado(a), ${identifyFullName}, OCORREU UM ERRO &#x274C <br> POR FAVOR, INSIRA UM NÚMERO DE CARTÃO VÁLIDO ${validator.maskify(identifyCardNumber)}`
    
  } if (creditCardNumberisValid === " ") {
    modalContentElement.innerHTML = ` Prezado(a), ${identifyFullName}, POR FAVOR, INSIRA O NÚMERO DO SEU CARTÃO! &#x26A0`
  }
}

spanClose.addEventListener("click", hideModal); // vai configurar uma FUNÇÃO (hideModal) que será chamada sempre que o BOTÃO DE FECHAR for clicado.


function hideModal() {
  const modalElement = document.getElementById('modal'); 
  modalElement.classList.remove('show-modal'); // vai remover a apresentação do pop-up na tela.
}