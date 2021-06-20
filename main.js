var mouse_event = "empty";
var lpox, lpoy;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "green";
width = 5;

canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", mousemove);

function mousemove(e) {
    cpox = e.clientX - canvas.offsetLeft;
    cpoy = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(lpox, lpoy, 40, 0, 2*Math.PI);
        ctx.moveTo(lpox, lpoy);
        ctx.stroke();
        console.log("Test!");
    }
    lpox = cpox;
    lpoy = cpoy;
}

canvas.addEventListener("mouseup", mouseup);
function mouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mouseleave);
function mouseleave() {
    mouse_event = "mouseleave";
}

function clearC() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}