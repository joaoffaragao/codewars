function validatePIN(pin) {

    let pinString = pin.toString()
    let resposta = false

    if (pinString.length == 4 || pinString.length == 6) {

        for (let index = 0; index < pin.length; index++) {

            let digito = Number.parseInt(pinString[index])
            
            if (!Number.isInteger(digito)) {
                console.log(" tem 4 ou  6 caracter " + pin[index] + " mas nao e numero")
                resposta = true
            }
        }

        resposta =  !resposta
    }


    console.log(resposta)
    return resposta

    
}

/* console.log(" ======================")
validatePIN("1")
validatePIN("12")
validatePIN("123")
validatePIN("12345")
validatePIN("-1234")
validatePIN("1.234")
validatePIN("-1.234")
validatePIN("00000000")*/

validatePIN("a234")
validatePIN(".234")

validatePIN("1234")

validatePIN("0000")
validatePIN("1111")
validatePIN("123456")
validatePIN("098765")
validatePIN("000000")
validatePIN("123456")
validatePIN("090909") 