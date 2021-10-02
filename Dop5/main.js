
//№1
function Student(name, age, hobby, place){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.place = place;
}
let obj = new Student("Rem", 18, "programing", "SGU");
for (i in obj){
    console.log(`${i}: ${obj[i]}`);
}

//№2
let a = [1, 2];
let b = [2, 3];
let c = [];
for (i of a){
    let k = 0;
    for (j of c){
        if(j == i){
            k+=1;
        }
    }
        if (k==0){
            c.push(i);
    }
};
for (i of b){
    let k = 0;
    for (j of c){
        if(j == i){
            k+=1;
        }
    }
        if (k==0){
            c.push(i);
    }
};
console.log(c);

//№3
let arr = [0, 1, 1];
function fibo(num){
    for (let i = 3; i<=num; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr
};
console.log(fibo(8));

