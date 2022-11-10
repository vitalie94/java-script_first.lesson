// const name =1;
// let  name1 ="string";
// let name2=true;
// let name3=false;
// let name4=null;
// let name5 =undefined;
// // var name2=3;


// // name = "salut";
// name1 = "salut";






// console.log(name);
// console.log(name1)


// let score = null;
// console.log(typeof score);

// let ion = "2" ;
// let vasea = 4 ;
// let vasea2 = 7;
// score = ion + vasea ;

// console.log(typeof ion);
// console.log(typeof vasea2);
// const nume = "Mosneag";
// const prenume = "Vitalie";
// console.log(nume+ "   "  +prenume);

// console.log(score);
//  alert("salut");
//  prompt("salut, cum te numesti?")
// let number = true;
// let zece=10;
// console.log(zece);
// zece = 50
// let score = number + zece 
// console.log(zece);
// console.log(number);

// const a = 2;
// const b = 3;

//  if (a > b) {
//     console.log("true");
    
//  } else { 
//     console.log("false");
    
//  }

// if (a > 10 ) {
//     console.log("incorect");

// } else if(a =="2") {
//     console.log("sunt egale");

    
// } else{
//     console.log("error");

// }
// const c = 10;
// const e = 20;


//  if (c ===10 || e === 20) {
//     console.log("Sunt egale");
//  } else {
//     console.log("nu-s egale");
//  }

// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i += 1;
// };
// do {
//     console.log(i);
//     i +=1;
// } while (i <= 5);

    //     console.log(i);
    //     i +=1;
    // } while (i <= 5);
// for (let i = 0; i <5; i++) {
//      ;
//     console.log(i);
    
// }
// let array = [
//     "patru",
//     "unu",
//     "doi",
//     "trei",
//     "patru",
//     "cinci",
// ];

// array.forEach(el =>{
//     if(el.includes("patru")){
//         console.log(el);
//     }
// })
// const first_number = prompt("First Number");
// const operator = promt("mathematecal operator");
// const second_number = promt("Second number");

// if (operator  === "+"){
//     console.log(numrber(first_number) + Number (second_number));
// } else if (operator === "-"){
//     console.log(Number(first_number)  - Number(second_number));
// } else if (operator === "*"){
//     console.log(Number(first_number) * Number(second_number));
// } else if (operator === "/"){
//     console.log(Number(first_number) / Number(second_number));
// } else if (operator === "**"){
//     console.log(Number(first_number) ** Number(second_number));

//  const arr = [];
//  console.log(arr.length); 

//  const arr_1 = [1,2,3,4,5,"salut", true]
//  console.log(arr_1);

// let obj = {
//     name: "Ion",
//     age:"29",
//     gen:"M",
// }
// console.log(obj.name ,obj.age);

// const array = [
//   { name: "Ion", age: "29", gen: "M" },
//   { name: "Vasile", age: "19", gen: "M" },
//   { name: "Nina", age: "30", gen: "F" },
//   { name: "Larisa", age: "25", gen: "Fem" },
// ];
// let user= []
// let user1= []
// let userFeminin = []
 


//  function genfiltre(array ) {
//     array.forEach(el =>{
//       if (el.gen === "M") {
//         user.push(el);
//       }
//       if (el.gen === "f" || el.gen === "F" || el.gen === "Fem") {
//         userFeminin.push(el);

//       }
//       if (el.age === "30") {
//         user1.push(el);
//     }
// })
//  }
// genfiltre(array);
// console.log(user);
// console.log(user1);
// console.log(userFeminin);
// array.forEach(el=>{
//     if (el.age > 20);{
//         user.push(el)
//         console.log(el);
//     }console.log("err");
// })
// console.log(array[1].name);
// array.forEach(el =>{
//     console.log(el.name.includes("Ion"));
// })

// function name(params) {
//     params.forEach(el =>{
//         console.log(el);
//  } )
    
// }
// // name(array)
// // name(arr_1)

// function name_1(){
//     console.log("salut");
// }
// name_1()
// name_1()


// function calculator(numarUnu, numarDoi,operator) {
// let score = null;
// score = numarUnu + operator + numarDoi
// console.log(score);
// }
//  calculator(2,,8)
//  console.log(user);
//  let new_user = {
//    name: "Larisa",
//    age : "50",
//    gen : "F",
//    copil:{
//     name:"Marin",
//     age: "19",
//     gen: "M"
//    }
// }
// new_user.oras = "Chisinau";
// new_user.oras = "Drochia";
// console.log(new_user);

// user.push(new_user)
// user.unshift(new_user)
// user.pop()
// user.shift()
// console.log(user);

// const Http = new XMLHttpRequest()
const url = "https://jsonplaceholder.typicode.com/posts";

// Http.open("GET",url);
// Http.send();

// Http.onreadystatechange = () =>{
//   console.log(Http.responseText);
// }

const arrayData = [];

fetch(url)
.then(response =>
  response.json ())
.then((data)=>{
arrayData.push(data)
  info_data(arrayData)
})

function info_data(array_response) {
  array_response.forEach(element => {
    element.forEach((item) => {
      const body = document.querySelector("body");
      const tag_h1 = document.createElement("h1");
      tag_h1.innerHTML = item.title;
      tag_h1.className = "title";
      const tag_p = document.createElement("p1");

      tag_p.innerHTML = item.body;
      tag_p.className = "info_content";

      const div = document.createElement("div");
      div.className = "container";
      div.appendChild(tag_h1);
      div.appendChild(tag_p);
      body.append(div);
    });
  });
}

const arr = [
[
  {body:"ddd", title:"Salut"},
  {body:"You, are a coward",title:"if you gonna to San Francisco, Be sure you wear some flowers in youyr hair"},
{body:"Stop send my photo",title:"agent007"}
]
]


info_data(arr) 
function filtre_data(params,data_info) {
  params.forEach(element =>{
    element.forEach(item =>{

      if (item.title.includes(data_info)) {
        console.log(item);
        
      }
      else { 
        console.log("nu este asa");
      }
    })
  })
}
filtre_data(arr,"Salut")
