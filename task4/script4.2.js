//создание массива последовательности фибоначчи
function fibArr(n) {
	if (n > 0) {
		var arr = new Array(n);
		arr[0] = 1;
		arr[1] = 1;
		for (var i = 2; i < n; i++) {
			arr[i] = arr[i - 2] + arr[i - 1];
		}
		return arr;
	} else {
		alert("Неправильный ввод");
	}
}

function fib1(form) {
	var n = Number.parseInt(form.N.value);
	if (n > 0) {
		var arr = fibArr(n);
		alert(n + "-й член последовательности фибоначчи:" + arr[n - 1]);
	} else {
		alert("Неправильный ввод");
	}
}

function fib2(form) {
	var n = Number.parseInt(form.N.value);
	if (n > 0) {
		var arr = fibArr(n);
		var x = 0;
		for (var i = 0; i < n; i++) {
			x += arr[i];
		}
		alert("Cуммa первых " + n + " членов ряда Фибоначчи: " + x);
	} else {
		alert("Неправильный ввод");
	}
}

function fib3(form) {
	var n = Number.parseInt(form.N.value);
	if (n > 0) {
		var arr = fibArr(n);
		var x = 0;
		for (var i = 0; i < n; i++) {
			x += arr[i];
		}
		x = x / n;
		alert("Cреднее арифметическое первых " + n + " членов ряда Фибоначчи: " + x);
	} else {
		alert("Неправильный ввод");
	}
}

function calc1(form) {
	var n = Number.parseInt(form.X.value);
	if (n > 0) {
		var x = 1;
		for (var i = 1; i <= n; i++) {
			x = x * (x ^ i + x + 1);
		}
		alert("Произведение: " + x);
	} else {
		alert("Неправильный ввод");
	}
}

function calc2(form) {
	var n = Number.parseInt(form.X.value);
	if (n > 0) {
		var x = 0;
		for (var i = 1; i <= n; i++) {
			x = x + n / (2 * i - 1);
		}
		alert("Произведение: " + x);
	} else {
		alert("Неправильный ввод");
	}
}

function calc3(form) {
	var a = 0;
	var b = (1 + 10) / 2 * 10;
	for (var i = 3; i <= 33; i += 3) {
		a += i;
	}
	alert(a / b);
}

function calc4(form) {
	var a = (1 + 40) / 2 * 40;
	var b = 0;
	for (var i = 5; i <= 70; i += 5) {
		b += i;
	}
	alert(a * b);
}

function calc5(form) {
	var x = Number.parseFloat(form.X.value);
	if (x > 0 && x < 1) {
		var out = 0;
		var i = 0;
		var V = x ^ 2 / (i * 4 + 2);
		while (V > 0.0005) {
			out += V;
			i++;
			V = x / (2 + i * 4);
		}
		alert(out);
	} else {
		alert("Неправильный ввод");
	}
}

function calc6(form) {
	var x = Number.parseInt(form.X.value);
	var arr = new Array(16);
	if (x > 0) {
		for (var i = 1; i < 16; i++) {
			arr[i] = x ^ (1 + i * 4) / (4 * i);
		}
		x = 0;
		for (var i = 3; i < 16; i++) {
			x += arr[i];
		}
		alert(x);
	} else {
		alert("Неправильный ввод");
	}
}

function calc7(form) {
	var x = Number.parseInt(form.X.value);
	var out = 1;
	var d;
	if (x > 0) {
		for (var i = 1; i <= x; i++) {
			d = 1
			for (var j = 2; j <= i * 2; j++) {
				d = d * j;
			}
			out = out + (Math.pow(-1, i) * Math.pow(x, i * 2) / d);
		}
		alert("cosx = " + out)
	} else {
		alert("Неправильный ввод");
	}
}