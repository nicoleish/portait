let theBody = document.querySelector("body");

const theButton = document.querySelector("#button1");
 theButton.addEventListener('click', changeColor);

const theOtherButton = document.querySelector("#button2");
theOtherButton.addEventListener('click', changeColor)
console.log(theOtherButton);

function changeColor() {
	console.log("change color")
	theBody.style.color = "pink";
}


function onn(obj){
	obj.innerHTML="WRONG"
}
