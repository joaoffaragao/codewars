
function findOutlier(integers){

    if(ispar(integers)){
        console.log(sequenciaPar(integers))
        return  sequenciaPar(integers);
    }

    console.log(sequenciaImpar(integers))
    return sequenciaImpar(integers)
}

function ispar(integers){
    if(integers[0]%2 == 0){
        if(integers[1]%2 == 0){
            return true;
        }else{
            if(integers[2]%2 == 0){
                return true;
            }else{
                return false;
            }
        }
    }else{
        if(integers[1]%2 != 0){
            return false;
        }else{
            if(integers[2]%2 != 0){
                return false;
            }else{
                return true;
            }
        }
    }
}

function sequenciaPar(integers){
    let resposta
    integers.forEach(function(valor) {
        if(!(valor % 2 == 0) ){
            resposta = valor
        }
    });
    return resposta
}
function sequenciaImpar(integers){
    let resposta
    integers.forEach(function(valor) {
        if(valor % 2 == 0){
            resposta = valor
        }
    });
    return resposta
}


findOutlier([0, 1, 2])
findOutlier([1, 2, 3])
findOutlier([0,0,3,0,0])
findOutlier([2,6,8,10,3])
findOutlier([1,1,0,1,1])


