window.onload=function(){
    var i;
    for (i = 0; i < 4; i++) {
        var newSquare=document.createElement("article");
        var formObj=document.getElementById("jsSection");
        formObj.appendChild(newSquare);
        newSquare.style.height="50%";
        newSquare.style.width="50%";
        newSquare.style.cssFloat="left";
        newSquare.style.opacity=Math.random();
    }
}


document.onclick=function (){
    console.log("click")
    var newSquare=document.createElement("article");
    var formObj=document.getElementById("mainSection");
    formObj.appendChild(newSquare);
    newSquare.style.height="50%";
    newSquare.style.width="25%";
    newSquare.style.cssFloat="left";
    newSquare.style.opacity=Math.random();
}