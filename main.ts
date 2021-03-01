radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # . . . #
            # # # # #
            `)
        radio.sendString("Hei")
    }
})
