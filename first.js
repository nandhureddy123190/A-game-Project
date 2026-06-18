// {
//     let a = 10;
//     console.log(a);
// }

// let a=20;
// console.log(a);


// let x=BigInt("132");
// const student={
//     fname:"Nandu",
//     age:22,
//     gender:"Male",
//     cgpa:8.5
// }
// student["age"]=student["age"]+1;
// console.log(student);
// console.log(student.fname);

// let a=10;
// let b=20;
// a-=4;
// b-=4;
// console.log(a);
// console.log(b);

// let a=10;
// let b=20;
// let c="10";
// console.log(a===c);
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// let age=22;
// if(age>=18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("you are not eligible to vote");
// }

// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }else{
//     color="white";
// }
// console.log(color);

// let age=17;
// if (age>=18 && age<60){
//     console.log("major age");
// }else if(age>=13 && age<18){
//     console.log("teenage");
// }else if(age>=0 && age<13){
//     console.log("child");
// }else{
//     console.log("senior citizen");
// }

// document.write(9==="9");

// for(let i=0;i<100;i++){
//     console.log("nandu");
// }

// let sum=0;
// for(let i=0;i<=3;i++){
//     sum=sum+i;
// }
// console.log(sum);

// let str="college";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

//accesssing key values in an object
// let student={
//     fname:"Nandu",
//     age:22,
//     cgpa:8.5,
//     gender:"Male"
// }
// for(let key in student){
//     console.log(key);
//     console.log(student[key]);
// }

//printing even numbers from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// let gameNum=25;
// let userNum=prompt("Guess the number between 1 and 100");
// if(userNum==gameNum){
//     console.log("Congratulations! You guessed the number correctly.");
//     // document.write("Congratulations! You guessed the number correctly.");-> this will show in the webpage
// }else if(userNum<gameNum){
//     console.log("Too low! Try again.");
//     // document.write("Too low! Try again.");
// }else if(userNum>gameNum){    
//     console.log("Too high! Try again.");
//     // document.write("Too high! Try again.");
// }else{
//     console.log("Invalid input! Please enter a number between 1 and 100.");
//     // document.write("Invalid input! Please enter a number between 1 and 100.");
// }

// let fullName=prompt("Enter your full name without spaces:");
// fullName=fullName.replaceAll(" ","");//removing spaces from the full name
// let userName="@"+fullName+fullName.length;
// console.log(userName);

// let a =[1,2,3,4,5];
// a.splice(0,2);
// console.log(a);

// let a=[1,2,3,4,5];
// let res=a.some((val)=>val>4);
// console.log(res);

// let a=[4,9,16,25];
// let res=a.map(Array);
// function Array(){
//     return a.map(Math.sqrt);
// }
// console.log(res);

// let food=["chicken","potato","tomato"];

// let arr=[1,2,3,4,5,6];

// add element
// arr.splice(2,0,101);

// replacing elements
// arr.splice(2,2,101,102)

// deleting elements
// arr.splice(2,1)

// functions
// function conc(name){  //->parameter=conc(place holder inside the function)
//     console.log("hello "+ name);
// }
// conc("nandhu");//function calling->Arguement=nandhu(real value given at call time)

// let nums=[1,2,3,4,5];
// nums.forEach((val)=>{
//     console.log(val**2);
// });

// let nums=[1,2,3,4,5];
// let res=nums.map((val)=>{//->map is used to create a new array by applying a function to each element of the original array
//     return val**2;
// });
// console.log(res);

// let nums=[1,2,3,4,5];
// let evenres=nums.filter((val)=>{//->filter is used to create a new array with all elements that pass the test implemented by the provided function
//     return val%2!==0;
// })
// console.log(evenres);

// let nums=[1,2,3,4,5];
// let sum=nums.reduce((acc,val)=>{//->reduce is used to execute a reducer function on each element of the array, resulting in a single output value
//     return acc*val;
// })
// console.log(sum);

// marks greater than 90 using filter method
// let nums=[91,81,71,92,95];
// let res=nums.filter((val)=>{//->filter is used to create a new array with all elements that pass the test implemented by the provided function
//     return val>90;
// });
// console.log(res,length.res);

// take a number n as input from the user . create an array of numbers 1 to n, use reduse method to calculate sum of all elements in the array
// let n=Number(prompt("Enter a number:"));
// let arr=[];
// for (let i=0;i<n;i++){//->for loop to create an array of numbers from 1 to n
//     arr.push(i+1);//->push method to add elements to the array, i+1 is used to start the array from 1 instead of 0
// }
// let sum=arr.reduce((acc,val)=>{
//     return acc+val; //->acc is the accumulator that accumulates the result of the function, val is the current value being processed in the array
// })
// let mul=arr.reduce((acc,val)=>{
//     return acc*val;//->acc is the accumulator that accumulates the result of the function, val is the current value being processed in the array
// })
// console.log("sum:",sum);
// console.log("mul:",mul);
// console.log("number:",arr);

// find the square of each element in the array usning forEach method
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val**2);
// })

// anonymous function
// const sum=function(a,b){
//     return a+b;
// };
// console.log(sum(5,10));

// named function
// const factorial=function fact(n){
//     if (n===0 || n===1){
//         return 1;
//     }else{
//         return n*fact(n-1);
//     }
// }
// console.log(factorial(5));

// code for event handling
// const button=document.getElementById("myButton");
// button.addEventListener("click",function(){
//     alert("Button clicked!");//->this will show an alert box when the button is clicked
// });

// document.getElementById("myButton").addEventListener("click",function(){
//     console.log("Button clicked!");//->this will log a message to the console when the button is clicked
// });

// // call back function with setTimeout
// setTimeout(()=>{
//     console.log("This message is diaplayed after 3 seconds");
// },3000);//->setTimeout is used to execute a function after a specified number of milliseconds, in this case 3000 milliseconds or 3 seconds

// combining call back function with event handling
// document.getElementById("myButton").addEventListener("click",function(){
//     setTimeout(()=>{
//         console.log("Button was clicked 3 seconds ago!");//->this will log a message to the console 3 seconds after the button is clicked
//     },3000);
// })

// self invoking function
// (function(){
//     console.log("This is a self invoking function");//->this will log a message to the console immediately when the script is loaded
// })();

//Creation Using Object Literal
// const person={
//     name:"nandhu",
//     age:22,
//     greet:function(){
//         console.log("Hello, my name is "+ this.name + " and I am "+ this.age + " years old.");
//     }
// }
// person.greet();

// accessing object properties using dot notation and bracket notation
// const person={
//     name:"nandhu",
//     age:22,
// }
// console.log(person.name);//->dot notation to access the name property of the person object
// console.log(person["age"]);//->bracket notation to access the age property of the person object

//modifying object properties
// const person={
//     name:"nandhu",
//     age:22,
// }
// person.name="nandu reddy";//->modifying the name property of the person object
// person.age=23;//->modifying the age property of the person object
// console.log(person);

// checking if a property exists in an object
// const person={
//     name:"nandhu",
//     age:22,
// }
// console.log("name" in person);//->this will return true if the name property exists in the person object
// console.log(person.hasOwnProperty("age"));//->this will return true if the age property exists in the person object

//merging two objects using Object.assign
// const obj1={
//     name:"nandhu",
//     age:22,
// }
// const obj2={
//     gender:"male",
//     cgpa:8.5,
// }
// const mergedObj=Object.assign({},obj1,obj2);
// const mergedObj2={...obj1,...obj2};//->this is another way to merge two objects using spread operator
// console.log(mergedObj);

//object destructuring
// const person={
// //     name:"nandhu",
// //     age:22,}    
// // const {name,age}=person;//->this is object destructuring, it allows us to extract properties from an object and assign them to variables
// // console.log(name);
// // console.log(age);

// length of an object
// const person={
//     name:"nandhu",
//     age:22,
// }
//     console.log(Object.keys(person).length);//->this will return the number of properties in the person object

// encapsulation
// class BankAccount{
//     constructor(name,balanace){
//         this.name=name;
//         this.balanace=balanace;
//     }
//     deposit(amount){
//         this.balanace+=amount;
//     }
//     showBalanace(){
//         console.log(this.balanace);
//     }
// }
// const account1=new BankAccount("nandhu",1000);
// account1.deposit(500);
// account1.showBalanace();

// document.body.style.backgroundColor="lightblue";//->this will change the background color of the webpage to light blue


//for changing the mode of the webpage from light to dark and vice versa
// let button=document.querySelector("#myButton");
// let body=document.querySelector("body");
// let currentMode="light";
// button.addEventListener("click",()=>{
//     if (currentMode==="light"){
//         currentMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currentMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log("Current mode:",currentMode);
// })


// code for changing the mode of the webpage from light to dark and vice versa using mouseover event
// const btn = document.getElementById("btn"); // Get the button element from HTML

// let isDark = false; // Variable to remember current theme
//                     // false = light mode
//                     // true = dark mode

// btn.addEventListener("mouseover", () => { // Run this code whenever mouse enters button

//     if (isDark === false) { // Check if current mode is light

//         document.body.style.backgroundColor = "black"; // Change background to black

//         document.body.style.color = "white"; // Change text color to white

//         isDark = true; // Update variable to remember we're now in dark mode

//     } else { // If already in dark mode

//         document.body.style.backgroundColor = "white"; // Change background to white

//         document.body.style.color = "black"; // Change text color to black

//         isDark = false; // Update variable to remember we're now in light mode
//     }
//     if(isDark===true){
//         console.log("Current mode: Dark");
//     }else{
//         console.log("Current mode: Light");
//     }
// });