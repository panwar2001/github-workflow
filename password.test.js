const {test,expect}= require('@jest/globals');
const check=require('./password');
const Test=(password)=>{
test('Check if password length is alteast 7',()=>{
    expect(check.passwordLength(password)).toBeTruthy();
});

test('check if password has digit or not',()=>{
    expect(check.passwordHasDigit(password)).toBeTruthy();
});

test('Check if password has atleast one special character',()=>{
    expect(check.passwordHasSpecialChar(password)).toBeTruthy();
});

test('has atleast 1 upper case letter',()=>{
    expect(check.hasUpperCase(password)).toBeTruthy();
});

test('has atleast 1 lower case letter',()=>{
    expect(check.hasLowerCase(password)).toBeTruthy();
});

}
Test('githubTutorial343@')