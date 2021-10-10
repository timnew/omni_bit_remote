let y = 0
let x = 0
let angle = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        angle = -1
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        angle = 1
    } else {
        angle = 0
    }
    radio.sendValue("a", angle)
    if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        x = 0
        y = 512
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        x = 0
        y = -512
    } else {
        x = 0 - pins.analogReadPin(AnalogPin.P2) + 512
        y = 0 - pins.analogReadPin(AnalogPin.P1) + 512
    }
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
