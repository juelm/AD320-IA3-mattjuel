function changeFirst(){
    document.getElementById("first").style.backgroundColor = "beige";
    document.getElementById("first").innerHTML = "Oh no! You ruined my page!";
    
}

function changeSecond(){
    document.getElementById("second").style.backgroundColor = "blue";
}

function changeSecondAgain(){
    document.getElementById("second").style.backgroundColor = "beige";
}

function changeFirstOnThird(){
    document.getElementById("third").style.backgroundColor = "beige";
    document.getElementById("first").style.backgroundColor = "chartreuse";
    document.getElementById("first").innerHTML = "Oh great! You're making it worse!";
}

function changeFourth(){
    document.getElementById("fourth").style.backgroundColor = "beige";
    document.getElementById("fourth").innerHTML = "Quick click on the crimson bar!";
}

function changeFifth(){
    document.getElementById("first").style.backgroundColor = "blue";
    document.getElementById("second").style.backgroundColor = "darkorange";
    document.getElementById("third").style.backgroundColor = "green";
    document.getElementById("fourth").style.backgroundColor = "black";
    document.getElementById("fifth").style.backgroundColor = "crimson";
    document.getElementById("first").innerHTML = "";
    
}

document.getElementById("first").addEventListener("click", changeFirst);

document.getElementById("second").addEventListener("mouseover", changeSecond);

document.getElementById("second").addEventListener("mouseout", changeSecondAgain);

document.getElementById("third").addEventListener("click", changeFirstOnThird);

document.getElementById("fourth").addEventListener("mouseover", changeFourth);

document.getElementById("fifth").addEventListener("click", changeFifth);



