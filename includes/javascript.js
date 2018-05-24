
window.onload=function() {
    var i;
    for (i = 0; i < 4; i++) {
        var newSquare = document.createElement("article");
        var formObj = document.getElementById("jsSection");
        formObj.appendChild(newSquare);
        newSquare.style.height = "250px";
        newSquare.style.width = "250px";
        newSquare.style.cssFloat = "left";
        newSquare.style.opacity = Math.random();
    }

    var plusElement = document.getElementById("plus")
    plusElement.onclick = function () {
        console.log("click")
        var newSquare = document.createElement("article");
        var formObj = document.getElementById("mainSection");
        formObj.appendChild(newSquare);
        newSquare.style.height = "250px";
        newSquare.style.width = "250px";
        newSquare.style.cssFloat = "left";
        newSquare.style.opacity = Math.random();
    }
}