// it's length is atleast 7
function passwordLength(password){
   if(password.length<7){
        return false;
    }
return true;
}

// it contains atleast 1 digit.
function passwordHasDigit(password){
  return /\d/.test(password);
}
// it contains atleast one special character such as "!@$#^()-+*".
function passwordHasSpecialChar(password){
  return /[!@$#^()-+*]/.test(password);
}
// it contains atleast one uppercase letter.
function hasUpperCase(password){
  return /[A-Z]/.test(password);
}

// it contains atleast one lowercase letter.
function hasLowerCase(password){
  return /[a-z]/.test(password);
}


module.exports={passwordLength,passwordHasDigit,passwordHasSpecialChar,hasUpperCase,hasLowerCase};