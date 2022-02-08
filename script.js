const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('seconds')
const resetBackgroundButton = document.getElementById('reset-background-button')
const changeBackgroundButton = document.getElementById('change-background-button')

function getCurrentTime() {
    let currentDate = new Date()
    let h = currentDate.getHours()
    let m = currentDate.getMinutes()
    let s = currentDate.getSeconds()

    if (h == 0)
        h = 12
    if (h > 12)
        h -= 12
    if (h < 10)
        h = '0' + h
    if (m < 10)
        m = '0' + m
    if (s < 10)
        s = '0' + s

    hourEl.innerHTML = h
    minuteEl.innerHTML = m
    secondEl.innerHTML = s
    setTimeout(getCurrentTime, 1000)
}
getCurrentTime()

const getRandomColorHex = () =>  {
    let number = parseInt(Math.random() * 16777215)
    let randomColor = '#' + number.toString(16)
    return randomColor
}
const changeBackgroundColor = () => document.body.style.backgroundColor = getRandomColorHex()
const resetBackground = () => document.body.style.backgroundColor = '#fff'

changeBackgroundButton.addEventListener('click', changeBackgroundColor)
resetBackgroundButton.addEventListener('click', resetBackground)