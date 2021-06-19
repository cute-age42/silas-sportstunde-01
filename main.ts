input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        . # . # .
        # . . . #
        `)
})
basic.showString("Lets go !")
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        . # # . .
        . # . # .
        . # . # .
        `)
})
