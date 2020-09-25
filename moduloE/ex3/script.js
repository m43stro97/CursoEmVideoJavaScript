function calcular(){
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.querySelector('p#pRes')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    console.log(inicio, fim, passo)
    console.log(typeof(inicio), typeof(fim), typeof(passo))


    
    if(txtinicio.value.length == 0|| txtfim.value.length == 0 || txtpasso.value.length == 0){
        alert('[ERRO] Campos não podem estar vazios')
        console.log(inicio, fim, passo)
        res.innerHTML = `Impossivel Contar!`
        return;
    }else if(passo <= 0){
        var resposta = window.confirm('Impossível fazer contagem com passo igual a 0. Deseja que passo fique igual 1?')
        if(resposta === true){
            passo = 1
            console.log(111111)
        }else{
            passo = null
            return;
        }
    }
    console.log(inicio, fim, passo)
    
    if(inicio == fim){
        res.innerHTML = `${inicio} &nbsp `
    }else if(inicio > fim){
        for(let i = fim; i <= inicio; i = i + passo){
            if(i == fim){
                res.innerHTML = `${i} &nbsp \u{1F449}`
                console.log(i)
            }else{
                res.innerHTML += `${i} &nbsp \u{1F449}`
                console.log(i)
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }else if(fim > inicio){
        for(let i = inicio; i <= fim; i = i + passo){
            if(i == inicio){
                res.innerHTML = `${i} &nbsp \u{1F449}`
                console.log(i)
            }else{
                res.innerHTML += `${i} &nbsp \u{1F449}`
                console.log(i)
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}