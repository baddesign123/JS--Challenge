let div = document.getElementById('timer')
let sek = div.getAttribute('value')
function timer() {
    div.innerText = sek
    if (sek < 0) {
        div.innerText = 'Time out'

        window.clearInterval(konte)
    }
    sek--
}
let konte = window.setInterval(timer, 1000)