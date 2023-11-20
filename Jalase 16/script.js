a =console.log()

// alert its need When We want to show somthing important to user
function a(){
    alert("hello  world from Iran!")
}

// confirm its need when we want to make sure of user Movment
var r=  confirm("Are You Sure to Leave?")
if(confirm){
    a(" you want Leave ")
}else{
    a(" you Dont Leave ")
}

// prompt
var t = Number(prompt("Please Enter Your Age ",20));
a(t);
var q = toString(t);
a(typeof(q));




// first way to made an array
var names = new Array("Amir", "Zahra");
a(names);

// second way to made an array
let information = {
    name: 'Amir',
    age: 24,
    email: 'A40@email.com'
};
a(information);

// third way to made an array
var Countries = new Array(3);
courses[0] = "Iran";
courses[1] = "Turkey";
courses[2] = "UAE";
a(Countries);


// forth way to made an array
var Countries = ["Iran", "Turkey", "UAE"];
a(Countries);


// The Way to connect two array
var ar1 = ["Amir", "Zahra"];
var ar2 = ["Zohre", "Mohsen"];
var courses = ar1.Contacts(ar2);
a(courses)


// task 1
function Calculat(name,price,discount){
    this.name=name;
    price*(price*discount);
}
var result1 = new Calculat(name, price, discount);
var name ='laptop';
var price=800;
var discount=13%;
a("The result is: " + result1);

var result2 =new  Calculat("final price",696);
a("The result is: " + result2);


// task 2
function Value(x,y,z){
    x*y*z;
}
var x=4;
var y=3;
var z=2;
var cobice1 = new Value(x,y,z);
a(cobice1);


