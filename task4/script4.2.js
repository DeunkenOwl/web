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
	var n = Number.parseInt(form.N.value)
	if (n > 0) {
		var arr = fibArr(n);
		alert(n + "-й член последовательности фибоначчи:" + arr[n - 1]);
	} else {
		alert("Неправильный ввод");
	}
}

function fib2(form) {
	var n = Number.parseInt(form.N.value)
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
	var n = Number.parseInt(form.N.value)
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

function v1(form) {
	var n = Number.parseInt(form.X.value)
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