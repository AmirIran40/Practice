
// in ES6 we can write loops easyer

// use loop for in array's
var arrey = new Array('amir', 'reza', 'sadegh');

// forEach loop
array.forEach((item) => {
    console.log(item);
})
// for loop
for (let item of array) {
    console.log(item);
}

// use loop for in object's
const Mobile = {
    Company: 'Samsung',
    Model: 'A51',
    OS: 'Android 13'
}
for (let na in Mobile) {
    // for getting value
    console.log(Mobile[na]);
    //  for getting key
    console.log(na);
}


// in ES6 we can use function faster (arrow function)
// first
const ArFu1 = (time) => {
    console.log("It is now " + time + " oclock ");
}
ArFu1(12);

// Secound
function ArFu2(time) {
    console.log("It is now " + time + " oclock ");
}
ArFu2(6);



let object = (num1, num2, num3) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
object(63, 99, 78);


let number = new Array("Amir", "Zahra", "Mahsa", "Javad");
changenumber(number[0], number[1], number[2], "Ehsan");
changenumber(...number, "Roshanak");


var n1 = "Amir";
var n2 = "Zahra";
[student1, student2] = [n1, n2];
console.log("student1 is" + student1);
console.log("student2 is" + student2);


let values = { value: 1400, value: 2500, value: 7600, value: 5550 };
console.log(values.value);



// call back function
setTimeout(() => {
    console.log("first-entry");
    setTimeout(() => {
        console.log("second-entry");
    }, 3500);
}, 4000);


// promises
function prom(entry) {
    return new Promise(function (resolve, reject) {
        if (entry === '') {
            reject(Error(" you havent Writed anything "));
        } else if (typeof entry === "string") {
            reject(Error(" you havent to enter a number "))
        }
        setTimeout(function () {
            resolve(entry);
        }, 1500);
    })
}