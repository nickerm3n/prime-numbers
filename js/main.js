document.querySelector('.owl-teacher').onclick = showHelp;
document.getElementById('button').onclick = primeNumber;
var timer1, timer2
var wrapper = document.querySelector('.number-wrapper');

function showHelp() {
	clearTimeout(timer1);
	clearTimeout(timer2);

	document.querySelector('.help').style.visibility = 'visible';

	var timer1 = setTimeout(function () {
		document.querySelector('.help').style.animation = 'hide 2s ease-in-out';
		var timer2 = setTimeout(function() {
			document.querySelector('.help').style.visibility = 'hidden';
		}, 2000)
	}, 10000)

}


function primeNumber() {
	var arr = []
	var form = document.forms['generator'];
	var start = parseInt(form.start.value);
	var end = parseInt(form.end.value);
	var desc = document.querySelector('.desc');
	desc.innerHTML = '';
	wrapper.innerHTML = '';

	if (end <= 3) {
		desc.innerHTML = 'Маленький диапазон'; return;
	}

	if (end >= 1549) {
		desc.innerHTML = 'Извини, дружок, это предел...'; return;
	}
 
	nextNumber:
	for (var i = start; i < end; i++) {
		for (var j = 2; j < i; j++) {
			if (i % j == 0) {continue nextNumber}
		}
	arr.push(i)
	}

	for (var i = 0; i < arr.length; i++) {
		var num = document.createElement('p');
		num.appendChild(document.createTextNode(arr[i]));
		num.classList.add('number');
		wrapper.appendChild(num);
	}
}

