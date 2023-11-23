var body = document.querySelector("body"), 
goDark = function() { 
body.className = "";
body.classList.add("dark");
},
goblue = function() {
body.className = "";
body.classList.add("blue");
}
golight = function() { 
body.className = "";
body.classList.add("light");
},
gobluedark = function() {
body.className = "";
body.classList.add("bluedark");
}

document.querySelector(".theme1").addEventListener("click", goDark, false); 
document.querySelector(".theme2").addEventListener("click", goblue, false); 
document.querySelector(".theme3").addEventListener("click", golight, false);
document.querySelector(".theme4").addEventListener("click", gobluedark, false); 