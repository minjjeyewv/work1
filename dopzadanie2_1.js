let x = prompt("Введите х", "");
let y = prompt("Введите y", "");
let p;
if (x > y) {
    p = y;
    y = x;
    x = p;
}
console.log('x=' + x + ' y=' + y);