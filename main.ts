input.onButtonPressed(Button.A, function () {
    // con esto sumamos uno porque le hemos dado al botón y por tanto sumamos 1 a las veces que hemos pulsado
    respuesta += 1
})
input.onButtonPressed(Button.B, function () {
    if (respuesta == numeroAleatorio) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let respuesta = 0
let numeroAleatorio = 0
numeroAleatorio = randint(1, 9)
// vale cero porque le he dado 0 veces al botón A al principio del juego
respuesta = 0
basic.showNumber(numeroAleatorio)
basic.pause(1000)
basic.clearScreen()
