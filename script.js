let tempo = 0

function relogio() {
  let data = new Date()
  let horas = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()

  let tempoTotal = `${horas} : ${minutos} : ${segundos}`
  let tempo = document.querySelector('.relogio')
  tempo.innerText = tempoTotal
}

setInterval(relogio, 1000)
