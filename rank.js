var maiorValor = 0
var buscarUsuario = true
let arr = [{}]
JSON

var players = localStorage.getItem('players')


if (players) {
  players = JSON.parse(players)
} else {
  arr = JSON.stringify(arr)
  localStorage.setItem('players', arr)
}


var pontos = localStorage.getItem('pontos')
pontos = JSON.parse(pontos)

var button = document.getElementById('enviar')

button.addEventListener('click', () => {
  var input = document.getElementById('nome')
  var nome = input.value
  nome = nome.toUpperCase()
  if (nome.length == 5) {
    for (let value in playerss[0]) {
      if (nome == value) {
        players[0][value] = pontos
        players = JSON.stringify(players)
        localStorage.setItem('players', players)
        buscarPlayer = false
      }
    }

    if (buscarPlayer) {
      players[0][nome] = pontos
      players = JSON.stringify(players)
      localStorage.setItem('players', players)
    }

    players = JSON.parse(players)

    input.disabled = true
    input.style.color = 'white'
    button.disabled = true
    button.style.color = 'white'
    painel()
  } else {
    alert('Insira um nick com 5 caracteres')
  }
})

function painel() {
  var painel = document.getElementById('ranking')
  for (let value in players[0]) {
    painel.innerHTML += `<p>${value} - ${players[0][value]}</p>`
  }
}

var scores = document.getElementById('SCORE')

scores.innerHTML = pontos  

