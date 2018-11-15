// DOM Manipulation
startColors();
function color() {
    document.getElementById("container").style.backgroundColor = "rgb(" +
        event.clientX + ", " +
        event.clientY + ", " +
        getRandomInteger(0, 255) + ")";
}

function getRandomInteger(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min)) + min;
}

function blockMove() {
    var elem = document.getElementById("animate");
    var xpos = 0;
    var ypos = 0;
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    var timer = 0;
    var id = setInterval(frame,5); //method sets frequency of interval; performs frame() every 1 sec
    function frame() {
        if (xpos == 350 && ypos == 350) {
            clearInterval(id); //method stops time interval
        } else {
            if (xpos == 350) {
                xpos = 0;
                ypos += 50;
                timer++;
                document.getElementById("animate").innerHTML = Math.round(timer / 100) + " sec<br />" +
                    Math.round(timer/28) + "%";
                elem.style.left = xpos + 'px';
                elem.style.top = ypos + 'px';
            } else {
                xpos++;
                timer++;
                document.getElementById("animate").innerHTML = Math.round(timer / 100) + " sec<br />" +
                Math.round(timer / 28) + "%";
                elem.style.left = xpos + 'px';
            }
        }
    }
}
function stopColors() {
    document.getElementById("container").removeEventListener("mousemove", color);
}
function startColors() {
    document.getElementById("container").addEventListener("mousemove", color);
}