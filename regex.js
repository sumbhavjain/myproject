var emailExp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function emailValid(email){
    return emailExp.test(email)
}

console.log(emailValid('sumbhavjain900@gmail.com'))
console.log(emailValid('s%u!#sa^kn%cn--=1&3@gsd.kjfnsa'))