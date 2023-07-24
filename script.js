function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let resultado = document.querySelector('div#resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) <= 0)  {
        window.alert('[erro] verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemasculino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Homemjovem.png')
                document.body.style.background = 'cornflowerblue '
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebefeminino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
                document.body.style.background = 'rgb(155, 11, 116)'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }

        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}