var stopwatch = function (displayElement) {

    var timer = 0
    var interval
    var offset

    function start() {
        if (!interval) {
            offset = new Date()
            interval = setInterval(repeat, 1);
        }
    }

    function stop() {
        if (interval) {
            clearInterval(interval)
            interval = null
        }
    }

    function reset() {
        stop()
        timer = 0
        display()
    }

    function repeat() {
        now = new Date()
        display()
        timer += now - offset
        offset = now
        // timer++;
    }

    function display() {
        displayElement.innerHTML = timer / 1000
    }

    this.start = start
    this.stop = stop
    this.reset = reset
}