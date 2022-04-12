function digPow(n, p){
    
    let numeroString = n + ""
    let numero
    let soma = 0
    let k = 0
    for(let index = 0; index < numeroString.length ; index++ , p++){
        
        numero = Number.parseInt(numeroString[index])
        
        soma =  soma + (numero ** p)
    }
    
    while((k * n) < soma ){
        k++
    }

    if((k * n) == soma){
        console.log("Resposta "+ k)
        return k
    }

    console.log("nao tem k")

    return -1
}
digPow(89, 1)
digPow(92, 1)
digPow(46288, 3)
