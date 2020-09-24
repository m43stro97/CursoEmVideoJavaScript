function carregar(){
    var hora = new Date().getHours();
    var img = document.getElementById('imagem')
    var message = window.document.getElementById('msg');

    if(hora >= 8 && hora < 12){
        //BOM DIA
        message.innerHTML = `Bom dia, são ${hora} horas`;
        img.src = 'manha.png'
        window.document.body.style.backgroundColor = '#FFE4B5';
    }else if(hora >= 12 && hora < 20){
        //BOA TARDE
        message.innerHTML = `Boa tarde, são ${hora} horas`;
        img.src = 'tarde.png'
        window.document.body.style.backgroundColor =  '#DAA520';
    }else{
        //BOA NOITE
        message.innerHTML = `Boa noite, são ${hora} horas`;
        img.src = 'noite.png'
        window.document.body.style.backgroundColor = 'slategrey';
        window.document.body.style.color = 'white';
    }
}

