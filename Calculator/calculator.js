let display = document.getElementById("display");

function takeValue(x) {
	display.innerHTML += x.innerHTML;
}

function clearContent(y) {
    display.innerHTML = y.value;
}

function calculateResult() {
	let result = eval(document.getElementById('display').innerHTML);
	document.getElementById('display').innerHTML = result;
}