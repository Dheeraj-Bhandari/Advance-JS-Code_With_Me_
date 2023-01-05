// premitive data type - > 

// Number
// String
// boolean 
// undefined
// null

let name = "Dheeraj"
let name2 = name;
console.log(name==name2)
name2 = "bhandari"
console.log(name)
console.log(name2)

let arr = [1,2,3,4,5,6,7]

let arr3 = ["a", "b", "c", "d"];

arr.push(arr3)

function deepCopy(objPassed){
    if(objPassed ===null || typeof objPassed !='object'){
        return objPassed
    }

    const newDeepCopyObj = new Array();
    for(var key in objPassed){
        newDeepCopyObj[key] = deepCopy(objPassed[key])
    }
    return newDeepCopyObj; 
}

// let arr2 = JSON.parse(JSON.stringify(arr))
let arr2 = deepCopy(arr)

// Map, filter , reduce, splice ->  deepcopy
// const newMapArr = arr.map((ele)=>ele)
// const newMapArr = arr.filter((ele)=>ele!=null)


// console.log(arr===arr2)
// arr2[7].push("f")

// arr2[7].push("e");
console.log("arr",arr)
console.log("arr2",arr2)



// const obj = {
//     name : "Dheeraj",
//     designation : {
//         type: "Developement"
//     }
// }
// console.log("newMApArr", newMapArr)



