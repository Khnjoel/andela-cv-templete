var myVar = setInterval(setColor, 900);

function setColor() {
    var x = document.getElementById("head");
    x.style.color = x.style.color == "green" ? "pink" : "green";
}

function stopColor() {
    clearInterval(myVar);
}