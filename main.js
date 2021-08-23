canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
WidthofLine = 1;
var lastposofx, lastposofy;
var mouseevent = "empty";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentposX = e.clientX - canvas.offsetLeft;
    currentposY = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown"){
        ctx.beginPath;
        ctx.strokeStyle = color;
        ctx.lineWidth = WidthofLine;
        ctx.moveTo(lastposofx,lastposofy);
        ctx.lineTo(currentposX,currentposY);
        ctx.stroke();
    }
    lastposofx = currentposX;
    lastposofy = currentposY;
}