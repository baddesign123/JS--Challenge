let e = document.getElementsByName('event-name')[0]
let btn = document.getElementById('action')
let eventLa = ""



e.onkeyup = function (event) {
    if (event.keyCode == "13") {
        if (e.value == "click" || e.value == 'dblclick' || e.value == "aksyonpam") {
            eventLa = `${e.value}`
            console.log(`Evènman sa valid. Se ${eventLa}`)          
        } else {
            console.log('Evènman sa pa valid')
        }

    }
}



