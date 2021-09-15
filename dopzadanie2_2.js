let xa = +prompt("Введите координату", "");
let ya = +prompt("Введите координату", "");
let za = +prompt("Введите координату", "");
let xb = +prompt("Введите координату", "");
let yb = +prompt("Введите координату", "");
let zb = +prompt("Введите координату", "");
let xc = +prompt("Введите координату", "");
let yc = +prompt("Введите координату", "");
let zc = +prompt("Введите координату", "");
let k;
let r;
let p;
k = ((xb - xa) ** 2 + (yb - ya) ** 2 + (zb - za) ** 2) ** 1 / 2;
r = ((xb - xc) ** 2 + (yb - yc) ** 2 + (zb - zc) ** 2) ** 1 / 2;
p = ((xc - xa) ** 2 + (yc - yb) ** 2 + (zc - za) ** 2) ** 1 / 2;
if (k ** 2 + r ** 2 === p ** 2 || p ** 2 + r ** 2 === k ** 2 || k ** 2 + p ** 2 === r ** 2) {
    alert("Yeas");
}
else {
    alert("No");
}

