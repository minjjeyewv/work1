let a = prompt("Введите строку", "");
let b;
var arr = [...a];
b = arr.reverse().join("");
if (a === b) {
    alert(true);
}
else {
    alert(false);
}