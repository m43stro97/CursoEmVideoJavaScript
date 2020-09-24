function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO]  Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //bebe
                img.setAttribute('src', 'MeninoBebe.jpg')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'MeninoJovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //bebe
                img.setAttribute('src', 'MeninaBebe.jpg')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'MeninaJovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Idosa.jpg')
            }
        }
        res.innerHTML = `Detetamos ${genero} com ${idade} anos.<p></p>`
        res.appendChild(img)
    }
}