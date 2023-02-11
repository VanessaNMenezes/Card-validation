const validator = {
   
  maskify(creditCardNumber) {
    
    const maskNumber = [];
    
    for (let i = 0; i < creditCardNumber.length; i++) { 
      
      if (i < creditCardNumber.length - 4) { 
       
        maskNumber.push('#'); 
      
      } else {
        maskNumber.push(creditCardNumber[i]); 
      }
    }
    
    return maskNumber.join("");
  },
  

  isValid(numberValidation) {

    const reverseNumbers = numberValidation.toString().split('').reverse().join('');
   
    let sum = 0; 

    for (let i = 0; i < reverseNumbers.length; i++) { 

      const digit = parseInt(reverseNumbers[i]);
    
      if (i % 2 === 0) { 

        sum += digit;  

      } else { 
 
        sum += digit * 2 >= 10 ? (digit * 2) % 10 + 1 : digit * 2;
      }
    }
    return sum % 10 === 0; 
  }
};

export default validator;