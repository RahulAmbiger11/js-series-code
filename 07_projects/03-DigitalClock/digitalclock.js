const clock = document.getElementById('clock')

//** Imp IQ **
setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)