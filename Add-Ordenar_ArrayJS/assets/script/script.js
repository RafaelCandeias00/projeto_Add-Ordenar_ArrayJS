var obj = ['Cadeira', 'Impressora', 'Garfo']

var adicionaArray = function () {
    var inputTexto = document.getElementById("campo_texto").value
    var textoValor = inputTexto

    

    if (textoValor.length > 0) {
        var checandoValorExistente = obj.includes(textoValor)

        if (checandoValorExistente === false) {
            obj.push(textoValor)
            document.getElementById("campo_texto").value = ""
            alert("Objeto adicionado: " + obj)

        } else {
            alert('Objeto já foi adicionado!')
            document.getElementById("campo_texto").value = ""
        }


    } else {
        alert('Informe um valor válido!')
    }
}

var ordenarArray = function () {
    obj.sort()
    alert("Objeto ordenado: " + obj)
}