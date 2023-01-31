const validator = {

  // MASCARANDO OS 4 ÚLTIMOS DÍGITOS:
   
  maskify(creditCardNumber) {
    const maskNumber = []; //Cria uma variável vazia para receber os números que o usuário colocar.
    for (let i = 0; i < creditCardNumber.length; i++) { // (i) pede para exibir no navegador o conteúdo da variável i. O < vai retornar true se o i for menor que a função creditCardNumber e false caso contrário. Depois vai pegar o "comprimento" de creditCardNumber e atualizar a expressão inicial representada pelo comando i++, que significa adicionar 1 ao valor de i.
      if (i < creditCardNumber.length - 4) { // vai pegar os números de creditCardNumber e subtrair ("tirar/isolar") os 4 últimos dígitos.
        maskNumber.push('#'); // vai colocar o símbolo # no lugar dos números, exceto os 4 últimos que foram "isolados". O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
      } else {
        maskNumber.push(creditCardNumber[i]); // vai pegar os números que foram mascarados por # (creditCardNumber) juntamente com o restante que foi "isolado" (4 últimos).
      }
    }
    return maskNumber.join(""); // vai juntar todos os elementos de maskNumber e retornar (exibir) estes elementos.
  },
  

  // ALGORITIMO DE LUHN:
  
  isValid(numberValidation) {
    let sum = 0;//cria uma variável de soma, que é atribuída a 0. / 1º ITERAR O NÚMERO DO CARTÃO DE CRÉDITO
    for (let i = 0; i <= numberValidation.length - 1; i++) // (i) pede para exibir no navegador o conteúdo da variável i. O <= vai retornar true se o i for menor ou igual a variável numberValidation e false caso contrário. Depois vai pegar o "comprimento" de numberValidation e subtrair 1. Por fim, há a atualização da expressão inicial representada pelo comando i++, que significa adicionar 1 ao valor de i.  / 2º UTILIZAR O MÓDULO PARA PEGAR O ÚLTIMO DÍGITO, 3º ADICIONAR ESSE DIGITO A SOMA.
    {
      let digit = parseInt(numberValidation[i]); // a função parseInt analisa a string e retorna um número inteiro (o que foi obtido acima, pela variável i).
      if (i % 2) { // indica que estamos utilizando a divisão para o primeiro dígito. / 4º UTILIZA A DIVISÃO PARA O PRIMEIRO DÍGITO.
        digit *= 2;  // declara que a variável digit é multiplicada por 2. Ou seja, vai pegar cada posição par indicada pelo i e vai multiplicar por 2. / 5º MULTIPLICA O DÍGITO POR 2.
        if (digit > 9) digit -=9; // SE a variável digit é MAIOR que 9, pede para que digit subtraia o valor do operando direito e atribui o resultado à variável.
      }
      sum += digit; // adiciona o valor do operando direito a variável sum, e atribui o resultado à variável. / 6º ADICIONA O DÍGITO MULTIPLICADO POR 2 À SOMA.
    }
    return sum % 10 === 0;  // pede para retornar o resultado da variável sum, fazer uma divisão por 10, se o resultado for exatamente igual a 0 = (É VÁLIDO!)
  }
};

export default validator;