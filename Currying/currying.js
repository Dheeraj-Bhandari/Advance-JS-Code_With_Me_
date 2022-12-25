
// Currying is used to transform Function from one callable to multi callebale function 
// E.g Below Sum Funciton can be Written in the form of CurryingSum Function with same output 

// Reason For Using It 
// For checking method to make sure that you get everything you need before you proceed
// It Help to avoid passing the same variable again and again
// It divides your function into multiple smaller functions that can handle one responsibility.
// It is used to create a higher-order function



function sum(a,b,c){
    return a+b+c;
}

function curryingSum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let obj ={
    name:"Code With me",
    designation : "Full Stack Developer"
}

function getObjKey(obj){
    return (key)=>{
        return obj[key];
    }
}

// let objKey = getObjKey(obj);
// console.log(objKey("designation"))


let sumdata = curryingSum(10)(20)(30)
console.log(sumdata)






