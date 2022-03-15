const btnSave = document.getElementById('btn-save')
btnSave.addEventListener('click', calcular)

function calcular() {
  var primeiroElemento = document.getElementById('first-number')
  var segundoElemento = document.getElementById('second-number')
  var terceiroElemento = document.getElementById('third-number')

  var item1 = Number(primeiroElemento.value)
  var item2 = Number(segundoElemento.value)
  var item3 = Number(terceiroElemento.value)

  var resultado = document.getElementById('result-mean')
  console.log('result', resultado)
  var media = (item1 + item2 + item3) / 3
  // resultado.innerHTML =
  //   'A média da soma dos números inseridos equivale a <strong>' +
  //   media +
  //   '<strong>'
  resultado.innerHTML = `A média da soma dos números inseridos equivale a <strong> ${media} <strong>`
}
