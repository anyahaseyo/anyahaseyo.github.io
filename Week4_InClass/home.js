// console.log("Week 4 - Hello World");

// Document Object Model

let greeting = document.getElementById("greeting")
console.log(greeting);

// Task
// get all instances of <p>
let paras = document.getElementsByTagName('p');
console.log(paras);

// item of array
for(para in paras) {
    console.log(para.innerText); //Element object's property "innerText"

    para.innerText = "Booyah"

}


