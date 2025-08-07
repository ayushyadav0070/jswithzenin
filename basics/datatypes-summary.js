// Primitive

// 7 types : String, number, boolean, null, undefined, symbol,
// bigint

const scoreValue = 100.3
const score = 100

const isLoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId)

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["a",'b','bc'];
let myObj = {
    name:"beckmann",
    age: 22,
}

const myfunction= function(){
    console.log("hlo wrld")
}

console.log(typeof outsidetemp);