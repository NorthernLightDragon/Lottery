
window.onload = function() {
	document.querySelector('.btnStart').onclick = function() {
		loto();
	}
}

function loto() {
	do {
		var a = +prompt('Enter the first number between 1 and 36!', '1');
	} while (a > 36 || a < 0 && a != null);
	do {
		var b = +prompt('Enter the second number between 1 and 36!', '1');
	}	while (b > 36 || b < 0 && b != null);
	do {
		var c = +prompt('Enter the third number between 1 and 36!', '1');
	} while (c > 36 || c < 0 && c != null);
	do {
		var d = +prompt('Enter the fourth number between 1 and 36!', '1');
	} while (d > 36 || d < 0 && d != null);
	do {
		var e = +prompt('Enter the fifth number between 1 and 36!', '1');
	} while (e > 36 || e < 0 && e != null);
	
	var personNumbes = [Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d), Math.abs(e)];
	var lotoNumber = [];
	var concurrences = '';

	for(i = 0; i < 5; i++) {
		var result = Math.round(36*Math.random() + 1);
		result = Math.round(36*Math.random(result) + 1);
		lotoNumber.push(result);
	}

	function concurrencesResult() {
		for (var i in personNumbes) {
			for (var j in lotoNumber) {
				if (personNumbes[i] == lotoNumber[j]) {
					concurrences += personNumbes[i] + '; ';
				}
			}
		}
		return concurrences;
	}
	concurrencesResult();

	document.querySelector('.your').innerHTML = '<h3>Your numbers - ' + personNumbes + '</h3>';
	document.querySelector('.loto').innerHTML = '<h3>Dropped numbers - ' + lotoNumber  + '</h3>';
	document.querySelector('.res').innerHTML = '<h2>Numbers, wich coincided - ' + concurrences  + '</h2>';
}

