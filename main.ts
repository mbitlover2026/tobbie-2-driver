control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (control.eventValue() == 1) {
            TobbieII.forward()
        } else if (control.eventValue() == 3) {
            TobbieII.backward()
        } else if (control.eventValue() == 5) {
            TobbieII.leftward()
        } else if (control.eventValue() == 7) {
            TobbieII.rightward()
        } else if (control.eventValue() == 9) {
            TobbieII.shake_head(5)
        } else if (control.eventValue() == 11) {
            TobbieII.vibrate(5)
        } else if (control.eventValue() == 13) {
            TobbieII.dance(5)
        } else if (control.eventValue() == 15) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        } else {
            TobbieII.stopwalk()
            TobbieII.stopturn()
        }
    }
})
let lastValue = 0
lastValue = 0
basic.showString("Tobbiedrive.app")
