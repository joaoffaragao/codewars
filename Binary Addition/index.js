

function addBinary(a, b) {

    let soma = a + b
    let resposta = ""

    let index = 256

    while (index >= 0) {
        if ((2 ** index) <= soma) {
            resposta = resposta + "1"
            soma = soma - 2 ** index 
        }else{
            if(resposta[0] === "1"){
                resposta = resposta + "0"
            }
        }
        index-- 
    }
    console.log(resposta)

    return resposta
}

addBinary(5,9)