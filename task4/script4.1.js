function squareS(form) {
	var a = Number.parseInt(form.width.value);
	if (typeof a == "number" && a >= 0) {
		alert("Площадь квадрата = " + a * a);
	} else {
		alert("Неправильный ввод");
	}
}

function circleS(form) {
	var r = Number.parseInt(form.radius.value);
	if (typeof r == "number" && r >= 0) {
		alert("Площадь круга = " + (22 / 7 * r * r).toFixed(3));
	} else {
		alert("Неправильный ввод");
	}
}

function ellipsS(form) {
	var mAxis = Number.parseInt(form.mAxis.value);
	var bAxis = Number.parseInt(form.bAxis.value);
	if (typeof mAxis == "number" && typeof bAxis == "number" && mAxis >= 0 && bAxis >= 0) {
		alert("Площадь эллипса = " + (22 / 7 * mAxis * bAxis).toFixed(3));
	} else {
		alert("Неправильный ввод");
	}
}

function parrS(form) {
	var h = Number.parseInt(form.h.value);
	var a = Number.parseInt(form.basis.value);
	if (typeof h == "number" && typeof a == "number" && h >= 0 && a >= 0) {
		alert("Площадь параллелограмма = " + (h * a).toFixed(3));
	} else {
		alert("Неправильный ввод");
	}
}

function trapecS(form) {
	var h = Number.parseInt(form.h.value);
	var a0 = Number.parseInt(form.basis0.value);
	var a1 = Number.parseInt(form.basis1.value);
	if (typeof h == "number" && typeof a0 == "number" && typeof a1 == "number" && h >= 0 && a0 >= 0 && a1 >= 0) {
		alert("Площадь трапеции = " + (h * (a0 + a1) / 2).toFixed(3));
	} else {
		alert("Неправильный ввод");
	}
}

function triangleS(form) {
	var h = Number.parseInt(form.h.value);
	var a = Number.parseInt(form.basis.value);
	if (typeof h == "number" && typeof a == "number" && h >= 0 && a >= 0) {
		alert("Площадь параллелограмма = " + (h * a / 2).toFixed(3));
	} else {
		alert("Неправильный ввод");
	}
}